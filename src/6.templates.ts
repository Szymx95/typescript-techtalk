type Template<T> = T
type Templated = Template<string>

const isNumber = (arg: unknown): arg is number => typeof arg === 'number'

function narrower2<T extends string | number | undefined>(arg: T) {
  if (!arg) {
    return undefined
  }
  if (isNumber(arg)) {
    return arg
  }
  return arg
}

const a = narrower2('test' as string)
const b = narrower2('test')
const c = narrower2(123)

type UnionToObject<T extends string | number> = { [K in T]: string }
type ObjectFromUnion = UnionToObject<'a' | 'b' | 'c'>

type ArrayToUnion<T extends Array<any>> = T[number]
type UnionFromArray = ArrayToUnion<[1, 2, 3]>

type ObjectFromArray = UnionToObject<ArrayToUnion<[1, 2, 3]>>

type Conditional<T> = T extends number ? string : bigint
type ConditionalString = Conditional<number>
type ConditionalBigInt = Conditional<string>

type ConditionalStringLiteral<T> = T extends `0x${number}` ? string : never
type ConditionalFromWrongType = ConditionalStringLiteral<string>
type ConditionalFromLiteral = ConditionalStringLiteral<'0x123'>

function arrExtension<T extends readonly any[], W>(arr: T, add: W): [W, ...T] {
  return [add, ...arr]
}

const newArr = arrExtension([1, 2, 3] as const, 0 as const)

type DefaultGeneric<T extends string = 'default'> = T

type DefaultString = DefaultGeneric
type CustomString = DefaultGeneric<'test'>

type NumberToText<T extends number> = `${T}`
type TextFromNumber = NumberToText<123>

export {}
