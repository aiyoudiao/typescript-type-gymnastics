import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/03188-tuple-to-nested-object'

describe('03188 - tuple-to-nested-object(元组到嵌套对象)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
