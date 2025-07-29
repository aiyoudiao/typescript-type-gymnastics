import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/hard/33763-union-to-object-from-key'

describe('33763 - union-to-object-from-key(从键到对象的联合)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
