import { describe, it, expectTypeOf } from 'vitest'
import type { MyPick } from '../../src/easy/00004-pick'

describe('00004 - pick(实现 Pick)', () => {
  it('可以选择指定类型的键', () => {
    type Todo = {
      title: string
      completed: boolean
      description: string
    }

    type Picked = MyPick<Todo, 'title' | 'completed'>

    expectTypeOf<Picked>().toEqualTypeOf<{
      title: string
      completed: boolean
    }>()
  })
})
