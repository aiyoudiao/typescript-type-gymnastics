import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/26401-json-schema-to-typescript'

describe('26401 - json-schema-to-typescript(JSON 模式到 TypeScript)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
