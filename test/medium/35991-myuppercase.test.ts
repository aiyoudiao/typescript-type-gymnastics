import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/35991-myuppercase'

describe('35991 - myuppercase(我的大写字母)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
