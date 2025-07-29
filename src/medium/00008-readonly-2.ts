/**
 * 00008 - readonly-2(对象部分属性只读)
 * @difficulty medium（中等）
 *
 * 👉 题目来源：https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md
 * 📝 请在下方写出你的实现：
 */

type MyExclude<T, U> = T extends U ? never : T

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property]
}

export type MyReadonly_2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in MyExclude<keyof T, K>]: T[P]
}
