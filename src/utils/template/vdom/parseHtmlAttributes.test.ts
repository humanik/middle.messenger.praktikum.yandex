import { parseHtmlAttributes } from './parseHtmlAttributes'

const cases = [
  [
    'class="btn" data-text="Click me!"',
    {
      class: 'btn',
      'data-text': 'Click me!'
    }
  ]
]

describe('parseHtmlAttributes', () => {
  test.each(cases)(
    'given %p and %p as arguments, returns %p',
    (attributes: string, expectedResult) => {
      const result = parseHtmlAttributes(attributes)
      expect(result).toEqual(expectedResult)
    }
  )
})
