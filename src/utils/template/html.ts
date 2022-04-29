import { isFalsy } from 'utils/helpers'
import { Template, TemplateAttributes, TemplatePart } from './Template'

export function html (strings: readonly string[], ...values: TemplatePart[]): VirtualElement {
  const template = new Template(strings, ...values)

  return template.createVirtualElement()
}

export function createAttributes (
  input: TemplateAttributes
): Record<string, string | EventListener> {
  const result: Record<string, string | EventListener> = {}

  if ('class' in input) {
    delete input.class // Use className instead.
  }

  for (const key in input) {
    const value = input[key]
    if (key === 'className') {
      result.class = createClasses(input.className as PossibleClass).join(' ')
    } else if (typeof value === 'string') {
      result[key] = value
    } else if (typeof value === 'function') {
      result[key] = value as EventListener
    } else if (typeof value === 'number') {
      result[key] = value.toString()
    }
  }

  return result
}

export const createClasses = (...names: PossibleClass[]): string[] => {
  const classNames: Set<string> = new Set()

  for (const name of names) {
    if (typeof name === 'string') {
      classNames.add(name)
    } else if (Array.isArray(name)) {
      createClasses(...name).forEach((name) => classNames.add(name))
    } else if (typeof name === 'object' && name !== null) {
      for (const [key, value] of Object.entries(name)) {
        if (!isFalsy(value)) {
          classNames.add(key)
        }
      }
    }
  }

  return Array.from(classNames).filter(Boolean)
}
