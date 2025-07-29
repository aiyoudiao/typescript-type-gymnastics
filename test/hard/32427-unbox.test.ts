import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/32427-unbox'

describe('32427 - unbox(拆箱)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
