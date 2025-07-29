import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/extreme/33345-dynamic-route'

describe('33345 - dynamic-route(动态路由)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
