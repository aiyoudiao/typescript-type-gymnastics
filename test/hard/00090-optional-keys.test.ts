import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/00090-optional-keys'

describe('00090 - optional-keys(可选类型的键)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
