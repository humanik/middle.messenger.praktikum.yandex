export function falsy (value: any): boolean {
  /* eslint-disable @typescript-eslint/strict-boolean-expressions */
  return !value
}

export function truthy (value: any): boolean {
  /* eslint-disable @typescript-eslint/strict-boolean-expressions */
  return !!value
}
