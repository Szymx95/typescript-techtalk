const isNumber = (arg: unknown): arg is number => typeof arg === 'number'

function narrower(arg: string | number | undefined) {
  if (!arg) {
    return undefined
  }
  if (isNumber(arg)) {
    return arg
  }
  return arg
}

const a = narrower('test')

export {}
