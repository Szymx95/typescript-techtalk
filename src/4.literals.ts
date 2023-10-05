type StringLiteral = 'this is string literal'

const stringLiteral: StringLiteral = 'this is string literal'

const stringLiteral2 = 'another literal' as const

const numberLiteral = 12 as const

const arrayLiteral = [1, 2, 3] as const

const objectLiteral = { a: 1, b: '2', c: 3n } as const

const hex = [1, 'test'] as const satisfies readonly [number, string]

type Hex = `0x${string}`

const a: Hex = `0x123`

export {}
