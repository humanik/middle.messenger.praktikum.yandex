import { isFalsy } from '../../helpers'
import { parseHtmlAttributes } from './parseHtmlAttributes'

export function parseHtml (html: string): VirtualElement[] {
  html = html.trim()
  const pattern = /<\/?(?<tagName>\w+)\s*(?<attributes>[\w-]+=".*?")?\s*\/?>/gs
  const stack: VirtualElement[] = []
  const result: VirtualElement[] = []
  const matchMap = new Map<VirtualElement, RegExpMatchArray>()

  for (const match of Array.from(html.matchAll(pattern))) {
    if (isFalsy(match.groups)) {
      continue
    }

    if (!isClosing(match[0])) {
      const element: VirtualElement = {
        tagName: match.groups.tagName,
        attributes: parseHtmlAttributes(match.groups.attributes),
        children: []
      }
      matchMap.set(element, match)

      if (stack.length === 0) {
        result.push(element)
      } else {
        // Add current element to parent children
        stack[stack.length - 1].children.push(element)
      }

      if (!isSelfClosing(match[0])) {
        stack.push(element)
      }
    } else {
      const element = stack.pop() as VirtualElement
      const elementMatch = matchMap.get(element)

      if (
        element.children.length === 0 &&
        elementMatch?.index !== undefined &&
        match.index !== undefined
      ) {
        const end = match.index
        const start = elementMatch.index + elementMatch[0].length
        const textContent = html.slice(start, end).trim()

        if (textContent.length > 0) {
          element.children.push(textContent)
        }
      }
    }
  }

  return result
}

export function isClosing (tag: string): boolean {
  return tag.startsWith('</')
}

export function isSelfClosing (tag: string): boolean {
  return tag.endsWith('/>')
}
