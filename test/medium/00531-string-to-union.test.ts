import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/00531-string-to-union'

describe('00531 - string-to-union(字符串到联合)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
