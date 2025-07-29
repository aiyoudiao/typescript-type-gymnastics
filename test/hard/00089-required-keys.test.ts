import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/00089-required-keys'

describe('00089 - required-keys(必需的键)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
