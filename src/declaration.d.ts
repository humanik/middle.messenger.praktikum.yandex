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
