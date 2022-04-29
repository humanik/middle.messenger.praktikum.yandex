enum HttpMethod {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE'
}

interface Config {
  url: string
  data: Record<string, unknown>
  method: HttpMethod
  baseUrl: string
  params: Record<string, string>
  headers: Record<string, string>
  timeout: number
}

type RequestConfig = Pick<Config, 'url' | 'method'> & Partial<Config>

export class Client {
  private readonly config: Partial<Config>

  constructor (config: Partial<Config>) {
    this.config = config
  }

  public async get (url: string, config: Partial<Config>): Promise<XMLHttpRequest> {
    const requestConfig = Object.assign(this.config, config, { url, method: HttpMethod.GET })

    return await this.request(requestConfig)
  }

  public async put (url: string, config: Partial<Config>): Promise<XMLHttpRequest> {
    const requestConfig = Object.assign(this.config, config, { url, method: HttpMethod.PUT })

    return await this.request(requestConfig)
  }

  public async post (url: string, config: Partial<Config>): Promise<XMLHttpRequest> {
    const requestConfig = Object.assign(this.config, config, { url, method: HttpMethod.POST })

    return await this.request(requestConfig)
  }

  public async delete (url: string, config: Partial<Config>): Promise<XMLHttpRequest> {
    const requestConfig = Object.assign(this.config, config, { url, method: HttpMethod.DELETE })

    return await this.request(requestConfig)
  }

  public async request (config: RequestConfig): Promise<XMLHttpRequest> {
    return await new Promise((resolve, reject) => {
      const { method, headers = {}, timeout = 5000 }: RequestConfig = Object.assign(this.config, config)
      const request = new XMLHttpRequest()

      request.open(method, this.prepareUrl(config))
      request.timeout = timeout

      Object.entries(headers).forEach(function ([key, value]) {
        request.setRequestHeader(key, value)
      })

      request.onload = function (): void {
        resolve(request)
      }

      const handleError = function (): void {
        reject(request)
      }

      request.onabort = handleError
      request.onerror = handleError
      request.ontimeout = handleError

      request.send(this.prepareData(config))
    })
  }

  private prepareUrl (config: RequestConfig): string {
    const url = new URL(config.url, config.baseUrl)

    if (typeof config.params === 'object') {
      Object.entries(config.params).forEach(([key, value]) => {
        url.searchParams.set(key, value)
      })
    }

    return url.toString()
  }

  private prepareData (config: RequestConfig): string | undefined {
    if (typeof config.data !== 'object' || config.method === HttpMethod.GET) {
      return
    }

    return JSON.stringify(config.data)
  }
}
