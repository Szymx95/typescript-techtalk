const str = 'asd' as string

const num = 123 as number

const bool = true as boolean

const arr = [1, 2, 3] as number[] | Array<number>

const nul = null as null

const big = 10n as bigint

const sym = Symbol('sym') as symbol

const und = undefined as undefined

const union = 1 as number | string

const intersection = { a: 1, b: '2' } as { a: number } & { b: string }

const any = (12 + '123') as any

const obj = {} as object | Record<string, any>

const unknown = (12 + '123') as unknown

const date = new Date() as Date

const fun = () => null as () => void

const tuple = [1, 2] as [number, number]

type Obj = { a: string; b: number }
type ObjA = Obj['a']
type ObjB = Obj['b']

const objKeyOf: keyof Obj = 'b'
const arrKeyOf: keyof ['a', 'b', 'c'] = 1

type TypeFromVar = typeof tuple

export {}
