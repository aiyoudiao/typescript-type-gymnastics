import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/00270-typed-get'

describe('00270 - typed-get(输入 get)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
