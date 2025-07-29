/**
 * 00004 - pick(实现 Pick)
 * @difficulty easy（简单）
 *
 * 👉 题目来源：https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
 * 📝 请在下方写出你的实现：
 */

export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
