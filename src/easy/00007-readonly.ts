/**
 * 00007 - readonly(对象属性只读)
 * @difficulty easy（简单）
 *
 * 👉 题目来源：https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
 * 📝 请在下方写出你的实现：
 */

export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
