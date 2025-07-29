import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/extreme/00005-readonly-keys'

describe('00005 - readonly-keys(获取只读属性)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
