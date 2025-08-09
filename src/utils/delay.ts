export function delay(ms: number = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
