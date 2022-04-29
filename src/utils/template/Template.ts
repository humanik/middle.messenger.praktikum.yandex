import { isFalsy } from 'utils/helpers'
import { Component as RealComponent } from './Component'
import { isComponentTuple, isComponentType, isVirtualElement } from './helpers'
import { createAttributes } from './html'
import { apply } from './vdom/apply'
import { parseHtml } from './vdom/parseHtml'

export type TemplatePart =
  | string
  | number
  | null
  | undefined
  | boolean
  | typeof RealComponent.constructor
  | ComponentTuple
  | VirtualElement
  | Array<string | number | ComponentTuple | VirtualElement>
  | TemplateAttributes

export type TemplateAttributes = Record<string, unknown>

export class Template {
  private readonly strings: readonly string[]
  public readonly values: TemplatePart[]

  constructor (strings: readonly string[], ...values: TemplatePart[]) {
    this.strings = strings
    this.values = values
  }

  public createVirtualElement (): VirtualElement {
    const rawHtml = this.strings.reduce((result: string, part: string, i: number) => {
      let replacement = ''
      const value = this.values[i]

      if (typeof value === 'string') {
        replacement = value
      } else if (typeof value === 'number') {
        replacement = value.toString()
      } else if (isComponentType(value) || isComponentTuple(value)) {
        replacement = `<Component attributes="${i}"/>`
      } else if (isVirtualElement(value)) {
        replacement = `<VirtualElement index="${i}"/>`
      } else if (Array.isArray(value)) {
        for (const item of value) {
          if (typeof item === 'string') {
            replacement += item
          } else if (typeof item === 'number') {
            replacement += item.toString()
          } else if (isComponentTuple(item)) {
            const i = this.values.push(item) - 1
            replacement += `<Component attributes="${i}"/>`
          } else if (isVirtualElement(item)) {
            const i = this.values.push(item) - 1
            replacement += `<VirtualElement index="${i}"/>`
          }
        }
      } else if (typeof value === 'object' && value !== null) {
        replacement = `attributes="${i}"`
      }

      result += part
      result += replacement

      return result
    }, '').trim()

    const $element = parseHtml(rawHtml)[0]

    apply(($element: VirtualNode) => {
      if (typeof $element === 'object') {
        if ($element.tagName === 'VirtualElement') {
          const index = parseInt($element.attributes.index as string)
          const value = this.values[index] as VirtualElement
          $element.tagName = value.tagName
          $element.attributes = value.attributes
          $element.children = value.children
        } else {
          this.replaceAttributes($element)
        }
      }
    }, $element)

    return $element
  }

  private replaceAttributes (node: VirtualElement): void {
    if (!isFalsy(node.attributes.attributes)) {
      const index = parseInt(node.attributes.attributes as string)
      if (node.tagName === 'Component') {
        const value = this.values[index]
        if (isComponentType(value)) {
          node.component = value
        } else if (isComponentTuple(value)) {
          node.component = value[0]
          node.attributes = value[1]
        } else {
          throw new Error('Invalid replacement')
        }
      } else {
        const value = this.values[index] as TemplateAttributes
        const attributes = createAttributes(value)
        Object.assign(node.attributes, attributes)
      }
      delete node.attributes.attributes
    }
  }
}
