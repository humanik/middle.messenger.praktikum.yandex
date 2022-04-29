export function parseHtmlAttributes (attributes?: string): StringRecord {
  if (attributes === undefined) {
    return {}
  }
  const result: StringRecord = {}
  const pattern = /(?<name>\w[\w\d\-_]*)="(?<value>.*?)"/g

  for (const match of attributes.matchAll(pattern)) {
    if (match.groups == null) {
      continue
    }
    result[match.groups.name] = match.groups.value
  }

  return result
}
