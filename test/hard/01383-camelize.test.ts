import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/01383-camelize'

describe('01383 - camelize(骆驼化)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
