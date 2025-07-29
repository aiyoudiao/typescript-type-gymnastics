import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/00010-tuple-to-union'

describe('00010 - tuple-to-union(元组转合集)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
