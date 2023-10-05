type GenericInfer<T> = T extends infer R ? R : never
type GenericInferred = GenericInfer<123>

type FirstElementInfer<T extends any[]> = T extends [infer First, ...any[]] ? First : never
type FirstElementInferred = FirstElementInfer<[6, 7, 8]>

type StringInfer<T extends string> = T extends `test ${infer Rest}` ? Rest : T
type StringInferred = StringInfer<'test inferred text'>
type StringNotInferred = StringInfer<'not inferred'>

type NumberToUnion<T extends number | string> = `${T}` extends `${infer First extends number}${infer Rest}`
  ? First | NumberToUnion<Rest>
  : never
type UnionFromNumber = NumberToUnion<1234>

type InferFunctionArgs<T> = T extends (...args: infer Args) => any ? Args : never
type InferredFunctionArgs = InferFunctionArgs<(a: string, b: number, c: bigint) => void>

export {}
