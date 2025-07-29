import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/28333-public-type'

describe('28333 - public-type(公共类型)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
