import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/02793-mutable'

describe('02793 - mutable(可变的)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
