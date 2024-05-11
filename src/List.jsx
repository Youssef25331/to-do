import React, { useState } from "react";

function List({ addTodo }) {
  const [input, setInput] = useState('')

  const handleAdd = e => {
    e.preventDefault()
    if (input) {
      addTodo(input)
      setInput('')
    } else {
      alert('Please type your todo!')
    }
  }

  return (
    <form className="todo-form" onSubmit={(e) => handleAdd(e)} >
      <input type="text" className='todo-input' placeholder='What do you want to add?' value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="todo-btn button-59" type='submit'>Add</button>
    </form >
  )
}

export default List 
