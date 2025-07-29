import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/25747-isnegativenumber'

describe('25747 - isnegativenumber(是负数)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
