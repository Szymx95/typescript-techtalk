interface Openable {
  num: number
}

interface Openable {
  str: string
}

const a: Openable = { num: 123, str: '123' }

interface Extendable extends Openable {
  big: bigint
}

const b: Extendable = {
  num: 1,
  str: '1',
  big: 123n,
}

interface Recurring {
  a: number
  b?: Recurring
}

const c: Recurring = {
  a: 1,
  b: {
    a: 2,
    b: {
      a: 3,
    },
  },
}

export {}
