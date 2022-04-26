import { parseHtml } from './parseHtml'

test('parseHtml', () => {
  const html = /* html */`
<div class="wrap">
  <div class="container" data-tooltip="Hello world!">
    <button attributes="0" >  0  </button>
    <input type="test" />
  </div>
  <div class="container" data-tooltip="Hello world!">
    <button attributes="0" >  0  </button>
    <svg viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59239 8.41379C6.16047 9.84571 3.83886 9.84571 2.40694 8.41379C0.975017 6.98187 0.975017 4.66027 2.40694 3.22834C3.83886 1.79642 6.16047 1.79642 7.59239 3.22834C9.02431 4.66027 9.02431 6.98187 7.59239 8.41379ZM8.03277 9.79675C6.07255 11.2961 3.25696 11.1494 1.46413 9.3566C-0.488491 7.40398 -0.488491 4.23816 1.46413 2.28553C3.41675 0.332912 6.58258 0.332912 8.5352 2.28553C10.3279 4.07828 10.4747 6.8937 8.97555 8.85391L12.5423 12.4206L11.5994 13.3634L8.03277 9.79675Z" fill="#999999"/>
    </svg>
  </div>
</div>`

  const expected = [
    {
      tagName: 'div',
      attributes: { class: 'wrap' },
      children: [
        {
          tagName: 'div',
          attributes: { class: 'container', 'data-tooltip': 'Hello world!' },
          children: [{
            tagName: 'button',
            attributes: { attributes: '0' },
            children: ['0']
          },
          {
            tagName: 'input',
            attributes: { type: 'test' },
            children: []
          }]
        },
        {
          tagName: 'div',
          attributes: { class: 'container', 'data-tooltip': 'Hello world!' },
          children: [{
            tagName: 'button',
            attributes: { attributes: '0' },
            children: ['0']
          },
          {
            tagName: 'svg',
            attributes: { viewBox: '0 0 13 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            children: [
              {
                tagName: 'path',
                attributes: {
                  'fill-rule': 'evenodd',
                  'clip-rule': 'evenodd',
                  d: 'M7.59239 8.41379C6.16047 9.84571 3.83886 9.84571 2.40694 8.41379C0.975017 6.98187 0.975017 4.66027 2.40694 3.22834C3.83886 1.79642 6.16047 1.79642 7.59239 3.22834C9.02431 4.66027 9.02431 6.98187 7.59239 8.41379ZM8.03277 9.79675C6.07255 11.2961 3.25696 11.1494 1.46413 9.3566C-0.488491 7.40398 -0.488491 4.23816 1.46413 2.28553C3.41675 0.332912 6.58258 0.332912 8.5352 2.28553C10.3279 4.07828 10.4747 6.8937 8.97555 8.85391L12.5423 12.4206L11.5994 13.3634L8.03277 9.79675Z',
                  fill: '#999999'
                },
                children: []
              }
            ]
          }]
        }
      ]
    }
  ]

  const result = parseHtml(html)
  expect(result).toEqual(expected)
})
