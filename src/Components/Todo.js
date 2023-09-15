import React from 'react'

import Add from './Add'
import TodoTask from './TodoTask'
import CompletedTask from './CompletedTask'

export default function Todo() {
  return (
   <>
        <Add/>
        <TodoTask/>
        <CompletedTask/>
        </>
  )
}
