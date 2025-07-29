import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/02852-omitbytype'

describe('02852 - omitbytype(按类型省略)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
