declare module '*.svg' {
  export default String
}

interface HTMLDialogElement extends HTMLElement {
  open: boolean
  returnValue: string
  close: () => any
  show: () => any
  showModal: () => any
}

interface WithChildren {
  children?: string | number | undefined | null | VirtualElement | VirtualElement[]
}

interface WithClass {
  className?: PossibleClass
}

type NodePatch = (v: Node) => Node | undefined

type VirtualNode = string | VirtualElement

interface VirtualElement {
  tagName: string
  attributes: Record<string, string | EventListener>
  children: VirtualNode[]
  component?: [new() => Component, Record<string, unknown>]
  instance?: Component
}

interface Component {
  getElement: () => Element
}

type PossibleClass = string | boolean | undefined | null | Record<string, boolean | null | undefined> | PossibleClass[]

type Primitive = string | number | bigint | boolean | null | undefined

type Falsy = false | '' | 0 | null | undefined

type Nullish = null | undefined
