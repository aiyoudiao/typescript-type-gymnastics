import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/13580-replace-union'

describe('13580 - replace-union(替换联合)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
