import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/29785-deep-omit'

describe('29785 - deep-omit(深度省略)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
