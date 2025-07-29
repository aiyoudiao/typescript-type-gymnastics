import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/warm/00013-hello-world'

describe('00013 - hello-world(你好世界)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
