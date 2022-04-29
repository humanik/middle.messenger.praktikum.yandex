declare module '*.svg' {
  export default String
}

type StringKey<T> = keyof T & string

type StringRecord = Record<string, string>

type UnknownRecord = Record<string, unknown>

type ComponentTuple = [new (v?: unknown) => Component, Record<string, any>]

interface FormState<T> {
  form: {
    values: T
    touched: Partial<Record<StringKey<T>, boolean>>
    isSubmitted: boolean
  }
}

interface Component {
  setProps: (v: unknown) => void
  getElement: () => Element
}

type RecursivePartial<T> = {
  [P in keyof T]?:
  T[P] extends Array<infer U> ? Array<RecursivePartial<U>> :
    T[P] extends object ? RecursivePartial<T[P]> :
      T[P];
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
  component?: new(props: unknown) => Component
  instance?: Component
}

interface VirtualComponent {
  tagName: 'Component'
  attributes: Record<string, string | EventListener>
  instance: Component
  component: new(props: unknown) => Component
}

type PossibleClass = string | boolean | undefined | null | Record<string, boolean | null | undefined> | PossibleClass[]

type Primitive = string | number | bigint | boolean | null | undefined

type Falsy = false | '' | 0 | null | undefined

type Nullish = null | undefined
