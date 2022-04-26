export class EventBus {
  private listeners: Record<string, Function[]>

  constructor () {
    this.listeners = {}
  }

  public on (event: string, callback: Function): void {
    if (!(event in this.listeners)) {
      this.listeners[event] = []
    }
    this.listeners[event].push(callback)
  }

  public off (event: string, callback: Function): void {
    this.checkEvent(event)

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    )
  }

  public emit (event: string, ...args: any[]): void {
    this.checkEvent(event)

    this.listeners[event].forEach(function (fn) {
      fn(...args)
    })
  }

  private checkEvent (event: string): void {
    if (!(event in this.listeners)) {
      throw new Error(`Event ${event} not found`)
    }
  }
}
