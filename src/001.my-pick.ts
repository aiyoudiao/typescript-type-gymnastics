/*
 * File: 001.my-pick.ts                                                        *
 * Project: typeScript-type-gymnastics                                         *
 * Created Date: 2025-07-22 16:46:31                                           *
 * Author: aiyoudiao                                                           *
 * -----                                                                       *
 * Last Modified:  2025-07-22 16:46:32                                         *
 * Modified By: aiyoudiao                                                      *
 * -----                                                                       *
 * Copyright (c) 2025 哎哟迪奥(码二)                                                 *
 * --------------------------------------------------------------------------- *
 */
export type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
