export function parseHtmlAttributes (attributes: string | undefined): Record<string, string> {
  if (attributes === undefined) {
    return {}
  }
  const result: Record<string, string> = {}
  const pattern = /(?<name>\w[\w\d\-_]*)="(?<value>.*?)"/g

  for (const match of attributes.matchAll(pattern)) {
    if (match.groups == null) {
      continue
    }
    result[match.groups.name] = match.groups.value
  }

  return result
}
