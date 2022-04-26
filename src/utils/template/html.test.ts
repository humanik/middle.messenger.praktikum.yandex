import { html } from './html'

it('correct parse VirtualElement', () => {
  const children = [
    {
      tagName: 'button',
      attributes: {},
      children: []
    },
    {
      tagName: 'button',
      attributes: {},
      children: []
    }
  ]

  const result = html`
<div ${{ className: 'btn-group' }}>${children}</div>`

  const expected = [
    {
      tagName: 'div',
      attributes: { class: 'btn-group' },
      children
    }
  ]

  expect(result).toEqual(expected)
})
