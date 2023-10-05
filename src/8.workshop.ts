type FillArray<T, Amount extends number, Res extends T[] = []> = 
    Res['length'] extends Amount ? Res : FillArray<T,Amount, [T, ...Res]>

function repeatElement<T, Amount extends number>(el: T, amount: Amount): FillArray<T,Amount> {
    return Array(amount).fill(el) as FillArray<T,Amount>
}

const repeatElementResult0 = repeatElement(5,5) //should be [number, number, number, number, number]
const repeatElementResult1 = repeatElement(5 as const,5) //should be [5,5,5,5,5]

type ExtractResult<T, Keys extends (keyof T)[] | readonly (keyof T)[]> = Keys extends readonly [
  infer Key extends keyof T,
  ...infer Rest,
]
  ? Rest extends readonly (keyof T)[]
    ? [T[Key], ...ExtractResult<T, Rest>]
    : never
  : Keys extends readonly [infer Key extends keyof T]
  ? [T[Key]]
  : Keys extends [infer Key extends keyof T, ...infer Rest]
  ? Rest extends (keyof T)[]
    ? [T[Key], ...ExtractResult<T, Rest>]
    : never
  : Keys extends [infer Key extends keyof T]
  ? [T[Key]]
  : T[keyof T][]

function extractKeys<T, Keys extends (keyof T)[] | readonly (keyof T)[]>(obj: T, keys: Keys): ExtractResult<T, Keys> {
  return keys.map((key) => obj[key]) as ExtractResult<T, Keys>
}

const extractionObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  f: 5,
} as const

const keys = ['a', 'b'] as ['a', 'b']

const extractResult = extractKeys(extractionObject, keys)
const extractResult0 = extractResult[0] // should be literal 1
const extractResult1 = extractResult[1] // should be literal 2

const extractResult2 = extractKeys(extractionObject, ['a', 'b'])
const extractResult20 = extractResult2[0] // should be (1 | 2 | 3 | 4 | 5)
const extractResult21 = extractResult2[1] // should be (1 | 2 | 3 | 4 | 5)

type SingleArr = [string | number, any] | readonly [string | number, any]
type Arr = SingleArr[] | readonly SingleArr[]

type ObjectifyArraysReturn<T extends Arr> = T extends readonly [SingleArr, ...infer Rest extends Arr]
  ? { [K in T[0][0]]: T[0][1] } & ObjectifyArraysReturn<Rest>
  : { [K in T[0][0]]: T[0][1] }

function objectifyArrays<T extends Arr>(arr: T): ObjectifyArraysReturn<T> {
  return arr.reduce((acc: any, [key, value]) => {
    acc[key] = value
    return acc
  }, {} as any) as any
}

const result = objectifyArrays([
  ['a', 1],
  ['b', 2],
  ['c', 'text'],
] as const)
const resultA = result.a // should be literal 1
const resultB = result.b // should be literal 2
const resultC = result.c // should be literal text

const result2 = objectifyArrays([
  ['a', 11],
  ['b', 22],
])
const result2A = result2.a // should be number
const result2B = result2.b // should be number

const result3 = objectifyArrays([
  ['a', 'test'],
  ['b', 22],
])
const result3A = result3.a // should be string | number
const result3B = result3.b // should be string | number

export {}
