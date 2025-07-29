import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/easy/00011-tuple-to-object'

describe('00011 - tuple-to-object(元组转换为对象)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
