import React, { useEffect, useRef, useState } from "react";
import List from './List.jsx'
import Item from './Item.jsx'
import EditItem from './EditItem.jsx'
import { v4 as uuidv4 } from 'uuid'


function ItemWrapper() {
  const [todos, setTodos] = useState([])
  const hasMounted = useRef(false)

  const setStorage = (currentTodos) => {
    localStorage.setItem('todos', JSON.stringify(currentTodos));
  }

  const getStorage = () => {
    const currentTodos = JSON.parse(localStorage.getItem('todos'))
    return currentTodos
  }

  useEffect(() => {
    const currentTodos = getStorage()
    if (currentTodos) {
      setTodos(currentTodos)
    }
  }, [])
  useEffect(() => {
    if (hasMounted.current) {
      setStorage(todos)
    } else {
      hasMounted.current = true
    }
  }, [todos])

  const addTodo = todo => {
    setTodos(t => [...t, { id: uuidv4(), value: todo, isEditing: false, finished: false }])
  }
  const toggleFinished = id => {
    setTodos((todos) => todos.map(todo => (todo.id === id ? { ...todo, finished: !todo.finished } : todo)))
  }
  const deleteTodo = id => {
    setTodos((todos) => todos.filter(todo => todo.id !== id))
    setStorage(todos)
  }

  const toggleEdit = id => {
    setTodos((todos) => todos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)))
  }
  const editTodo = (id, value) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, value: value } : todo)))
  }

  return (
    <div className="item-wrapper">
      <h1>MAKE YOUR LIST</h1>
      <List addTodo={addTodo} />
      {todos.map((todo, index) => (todo.isEditing ?
        <EditItem editTodo={editTodo} toggleEdit={toggleEdit} todo={todo} key={index} /> :
        <Item toggleEdit={toggleEdit} deleteTodo={deleteTodo} toggleFinished={toggleFinished} todo={todo} key={index} />
      ))}
    </div>
  )
}



export default ItemWrapper
