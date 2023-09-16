import React from 'react'
import Add from './Add'
import TodoTask from './TodoTask'
import CompletedTask from './CompletedTask'

export default function Todo() {
  return (
   <div className='sec1'>
   <>
       {/* Render the Add component for adding new tasks */}
        <Add/>
        {/* Render the TodoTask component for displaying pending tasks */}
        <TodoTask/>
        {/* Render the CompletedTask component for displaying completed tasks */}
        <CompletedTask/>
        </>
        </div>
  )
}
