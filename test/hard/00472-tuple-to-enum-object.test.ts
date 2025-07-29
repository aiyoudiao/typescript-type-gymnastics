import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/00472-tuple-to-enum-object'

describe('00472 - tuple-to-enum-object(元组到枚举对象)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
