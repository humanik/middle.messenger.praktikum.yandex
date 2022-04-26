import { isFalsy } from 'utils/helpers'
import { EventBus } from './EventBus'
import { mergeDeep } from './helpers'
import { createElement } from './vdom/createElement'
import { diffNodes } from './vdom/diffNodes'

enum Events {
  mount = 'mount',
  update = 'update',
  detach = 'detach',
}

export abstract class Component<P = {}, S = {}> {
  protected props: Readonly<P>
  protected state: Readonly<S>
  private readonly eventBus: EventBus
  private element: Element
  private $element: VirtualElement

  constructor (props: P = {}) {
    this.state = {}
    this.props = props
    this.eventBus = new EventBus()
    this.registerEvents()
  }

  private registerEvents (): void {
    this.eventBus.on(Events.mount, this.onMount.bind(this))
    this.eventBus.on(Events.detach, this.onDetach.bind(this))
    this.eventBus.on(Events.update, this.onUpdate.bind(this))
  }

  protected abstract render (): VirtualElement

  protected onMount (): void {}

  protected onDetach (): void {}

  public getElement (): Element {
    if (isFalsy(this.element)) {
      this.onUpdate()
    }

    return this.element
  }

  public getState (): S {
    return this.state
  }

  private onUpdate (): void {
    if (isFalsy(this.element)) {
      this.$element = this.render()
      this.element = createElement(this.$element) as Element
    } else {
      const $newElement = this.render()

      const patch = diffNodes(this.$element, $newElement)
      patch(this.element)
      this.$element = $newElement
    }
  }

  public setProps (props: P): void {
    this.props = props
    this.dispatchUpdate()
  }

  protected setState (nextState: Partial<S>): void {
    mergeDeep(this.state, nextState)
    this.dispatchUpdate()
  }

  public dispatchMount (): void {
    this.eventBus.emit(Events.mount)
  }

  public dispatchDetach (): void {
    this.eventBus.emit(Events.detach)
  }

  public dispatchUpdate (): void {
    this.eventBus.emit(Events.update)
  }
}
