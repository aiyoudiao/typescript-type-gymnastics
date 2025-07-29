import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/00002-return-type'

describe('00002 - return-type(获取函数返回类型)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
