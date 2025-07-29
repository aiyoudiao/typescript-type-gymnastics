import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/00009-deep-readonly'

describe('00009 - deep-readonly(对象属性只读（递归）)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
