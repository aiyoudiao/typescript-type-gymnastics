import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/28143-optionalundefined'

describe('28143 - optionalundefined(可选未定义)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
