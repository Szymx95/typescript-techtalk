type Openable = {
  num: number
}

// Unlike Interface type cannot be reopened
// type Openable = {
//     str: string
// }

const a: Openable = { num: 123 }

type Extendable = Openable & {
  big: bigint
}

const b: Extendable = {
  num: 1,
  big: 123n,
}

type Recurring = {
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
