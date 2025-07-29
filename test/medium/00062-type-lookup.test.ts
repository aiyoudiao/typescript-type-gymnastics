import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/00062-type-lookup'

describe('00062 - type-lookup(查找类型)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
