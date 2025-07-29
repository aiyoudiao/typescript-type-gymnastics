import { describe, it, expectTypeOf } from 'vitest'
import type { ReplaceMe } from '../../src/medium/16259-to-primitive'

describe('16259 - to-primitive(将类型为字面类型（标签类型）的属性，转换为基本类型。)', () => {
  it('example test', () => {
    expectTypeOf<ReplaceMe>().toEqualTypeOf<any>()
  })
})
