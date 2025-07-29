import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/17973-deepmutable'

describe('17973 - deepmutable(深度可变)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
