import { isFalsy } from 'utils/helpers'

type Rule = (s: string) => void

interface FieldError {
  name: string
  error: string
}

export class Validator<T extends Record<string, string>> {
  protected fields: Partial<Record<StringKey<T>, Rule[]>> = {}

  public addRules (name: StringKey<T>, ...rules: Rule[]): void {
    if (!(name in this.fields)) {
      this.fields[name] = []
    }
    (this.fields[name] as Rule[]).push(...rules)
  }

  public getErrors (fields: T): FieldError[] {
    const result: FieldError[] = []

    for (const name of Object.keys(this.fields)) {
      const error = this.errorMessage(name, fields[name])
      if (!isFalsy(error)) {
        result.push({ name, error })
      }
    }

    return result
  }

  public isValid (name: StringKey<T>, value: string): boolean {
    return this.errorMessage(name, value).length === 0
  }

  public errorMessage (name: StringKey<T>, value: string): string {
    if (!(name in this.fields)) {
      throw new Error(`Unknown field ${name}`)
    }
    try {
      for (const rule of (this.fields[name] as Rule[])) {
        rule(value)
      }
    } catch (err) {
      return err.message
    }

    return ''
  }
}
