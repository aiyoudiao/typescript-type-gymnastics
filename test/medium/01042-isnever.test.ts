import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/01042-isnever'

describe('01042 - isnever(永远不会)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
