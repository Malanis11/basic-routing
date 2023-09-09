import { useReducer } from 'react'

// function reducer(state, { type, payload }) {}

export default function AdvancedTodo() {
    // const ACTIONS = {

    // }
//   const [state, dispatch] = useReducer(reducer)

  return (
    <>
      <div className='filter-form'>
        <div className='filter-form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value=''
          />
        </div>
        <label>
          <input type='checkbox' />
          Hide Completed
        </label>
      </div>

      <ul id='list'>
        <li className='list-item'>
          <label className='list-item-label'>
            <input
              type='checkbox'
              data-list-item-checkbox
            />
            <span data-list-item-text>Item 1</span>
          </label>
          <button data-button-edit>Edit</button>
          <button data-button-delete>Delete</button>
        </li>
        <li className='list-item'>
          <label className='list-item-label'>
            <input
              type='checkbox'
              data-list-item-checkbox
              onChange={(e) => console.log(e)}
            />
            <span data-list-item-text>Item 2</span>
          </label>
          <button data-button-edit>Edit</button>
          <button data-button-delete>Delete</button>
        </li>
        <li className='list-item'>
          <label className='list-item-label'>
            <input
              type='checkbox'
              data-list-item-checkbox
            />
            <span data-list-item-text>Item 3</span>
          </label>
          <button data-button-edit>Edit</button>
          <button data-button-delete>Delete</button>
        </li>
      </ul>

      <form id='new-todo-form'>
        <label htmlFor='todo-input'>New Todo</label>
        <input
          type='text'
          id='todo-input'
        />
        <button>Add Todo</button>
      </form>
    </>
  )
}
