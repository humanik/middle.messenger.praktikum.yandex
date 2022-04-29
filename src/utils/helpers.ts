// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export const isFalsy = (val: unknown): val is Falsy => !val

export function isObject (item: any): item is UnknownRecord {
  return !isFalsy(item) && typeof item === 'object' && !Array.isArray(item)
}

export function mergeDeep (target: UnknownRecord, ...sources: UnknownRecord[]): UnknownRecord {
  if (sources.length === 0) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (isFalsy(target[key])) {
          Object.assign(target, { [key]: {} })
        }
        mergeDeep(target[key] as UnknownRecord, source[key] as UnknownRecord)
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}
