export function required (errorMessage: string = 'Обязательное поле'): (s: string) => void {
  return (source: string): void => {
    if (source.length === 0) {
      throw new Error(errorMessage)
    }
  }
}

export function firstCapital (errorMessage: string = 'Первая заглавная'): (s: string) => void {
  return (source: string): void => {
    if (source[0] !== source[0].toUpperCase()) {
      throw new Error(errorMessage)
    }
  }
}

export function minLength (limit: number, errorMessage: string = `Не короче ${limit} символов`): (s: string) => void {
  return (source: string): void => {
    if (source.length < limit) {
      throw new Error(errorMessage)
    }
  }
}

export function maxLength (limit: number, errorMessage: string = `Не длиннее ${limit} символов`): (s: string) => void {
  return (source: string): void => {
    if (source.length > limit) {
      throw new Error(errorMessage)
    }
  }
}

export function email (errorMessage: string = 'Некорректный email'): (s: string) => void {
  return (source: string): void => {
    const pattern = /^[a-z][\w\d-]+[\w\d]@[a-z\d][\w\d\-_]*[a-z\d]\.\w{2,}$/i
    if (source.match(pattern) == null) {
      throw new Error(errorMessage)
    }
  }
}

export function hasInvalidChars (pattern: RegExp, errorMessage: string = "Недопустимые символы '{chars}'"): (s: string) => void {
  return (source: string): void => {
    const matches = Array.from(source.matchAll(pattern))
    if (matches.length > 0) {
      const invalidChars = matches.map(match => match[0])
      const uniqInvalidChars = [...new Set(invalidChars)]
      throw new Error(errorMessage.replace('{chars}', uniqInvalidChars.join('')))
    }
  }
}

export function phone (errorMessage: string = 'Некорректный номер'): (s: string) => void {
  return (source: string): void => {
    const pattern = /^\+?\d{10,15}$/
    if (source.match(pattern) == null) {
      throw new Error(errorMessage)
    }
  }
}

export function name (): (s: string) => void {
  return (source: string): void => {
    minLength(2)(source)
    firstCapital()(source)
    hasInvalidChars(/[^a-zа-яё-]/ig)(source)

    const hasLatinChars = source.match(/[a-z]/i) !== null
    const hasCyrillicChars = source.match(/[а-яё]/i) !== null

    if (hasLatinChars && hasCyrillicChars) {
      throw new Error('Кириллица или латиница, не вместе')
    }
  }
}

export function login (): (s: string) => void {
  return (source: string): void => {
    minLength(3)(source)
    maxLength(20)(source)
    hasInvalidChars(/[^\d\w-]/g)(source)

    if (source.match(/[a-z]/i) === null) {
      throw new Error('Добавьте букв :)')
    }
  }
}

export function password (): (s: string) => void {
  return (source: string): void => {
    minLength(8)(source)
    maxLength(40)(source)

    if (source.match(/[A-Z]/) === null) {
      throw new Error('Добавьте заглавную букву')
    }
    if (source.match(/\d/) === null) {
      throw new Error('Добавите цифру')
    }
  }
}
