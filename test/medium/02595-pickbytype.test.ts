import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/02595-pickbytype'

describe('02595 - pickbytype(按类型挑选)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
