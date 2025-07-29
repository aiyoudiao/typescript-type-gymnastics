import { describe, it, expectTypeOf } from 'vitest'
import type { MyOmit } from '../../src/medium/00003-omit'

describe('00003 - omit(实现 Omit)', () => {
  it('可以忽略指定类型的键', () => {
    type Todo = {
      title: string
      description: string
      completed: boolean
      createdAt: number
    }

    expectTypeOf<MyOmit<Todo, 'title' | 'createdAt'>>().toEqualTypeOf<{
      description: string
      completed: boolean
    }>()

    expectTypeOf<Omit<Todo, 'title' | 'createdAt'>>().toEqualTypeOf<{
      description: string
      completed: boolean
    }>()
  })
})
