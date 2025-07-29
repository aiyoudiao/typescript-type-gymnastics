import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/01367-remove-index-signature'

describe('01367 - remove-index-signature(删除索引签名)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
