import { describe, it, expectTypeOf } from 'vitest'
import type { MyReadonly } from '../../src/easy/00007-readonly'

describe('00007 - readonly(对象属性只读)', () => {
  it('MyReadonly 让对象的属性只读', () => {
    type Todo = {
      title: string
      description: string
      completed: boolean
      createdAt: number
    }

    expectTypeOf<MyReadonly<Todo>>().toEqualTypeOf<Readonly<Todo>>()

    // const todo: MyReadonly<Todo> = {
    //   title: 'Hey',
    //   description: 'foobar',
    //   completed: false,
    //   createdAt: 1,
    // }

    // todo.title = 'Hello'
  })
})
