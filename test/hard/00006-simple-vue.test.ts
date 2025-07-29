import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/00006-simple-vue'

describe('00006 - simple-vue(简单的 Vue 类型)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
