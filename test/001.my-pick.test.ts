/*
 * File: 001.my-pick.test.ts                                                   *
 * Project: typeScript-type-gymnastics                                         *
 * Created Date: 2025-07-22 16:47:10                                           *
 * Author: aiyoudiao                                                           *
 * -----                                                                       *
 * Last Modified:  2025-07-22 16:47:10                                         *
 * Modified By: aiyoudiao                                                      *
 * -----                                                                       *
 * Copyright (c) 2025 哎哟迪奥(码二)                                                 *
 * --------------------------------------------------------------------------- *
 */
// test/my-pick.test.ts
import { describe, it, expectTypeOf } from 'vitest'
import type { MyPick } from '@/001.my-pick'

describe('MyPick', () => {
  it('should pick specified keys', () => {
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
