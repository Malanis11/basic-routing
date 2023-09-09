import React from 'react'

export default function TodoList() {
  return (
    <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input type="text" id="todo-input" />
        <button>Add Todo</button>
    </div>
  )
}
