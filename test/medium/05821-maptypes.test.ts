import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/05821-maptypes'

describe('05821 - maptypes(地图类型)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
