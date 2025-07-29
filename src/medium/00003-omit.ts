/**
 * 00003 - omit(实现 Omit)
 * @difficulty medium（中等）
 *
 * 👉 题目来源：https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
 * 📝 请在下方写出你的实现：
 */

type MyExclude<T, U> = T extends U ? never : T

export type MyOmit<T, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P]
}
