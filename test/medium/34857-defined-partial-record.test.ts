import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/34857-defined-partial-record'

describe('34857 - defined-partial-record(定义部分记录)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
