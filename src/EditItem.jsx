import React, { useState } from "react";

function EditItem({ editTodo, toggleEdit, todo }) {
  const [input, setInput] = useState(todo.value)

  const handleAdd = e => {
    e.preventDefault()
    if (input) {
      editTodo(todo.id, input)
      toggleEdit(todo.id)
    } else {
      alert("Your todo can't be empty!")
    }
  }

  return (
    <form className="todo-form" onSubmit={(e) => handleAdd(e)} >
      <input type="text" className='todo-input' placeholder='Edit todo here!' value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="todo-btn button-59" type='submit' onClick={handleAdd}>Update</button>
    </form >
  )
}

export default EditItem 
