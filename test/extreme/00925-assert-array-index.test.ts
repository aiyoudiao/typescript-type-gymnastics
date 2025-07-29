import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/extreme/00925-assert-array-index'

describe('00925 - assert-array-index(断言数组索引)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
