import * as React from 'react'
import { Action } from './'

export default (action: Action) => ({
  changeNewTodoTitle: action<React.ChangeEvent<HTMLInputElement>>()
    .map((event) => event.currentTarget.value)
    .mutation((value, state) => (state.newTodoTitle = value)),
})