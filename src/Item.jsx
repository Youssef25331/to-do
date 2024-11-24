import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

function Item({ todo, toggleFinished, deleteTodo, toggleEdit }) {
  return (
    <div onClick={() => toggleFinished(todo.id)} className={todo.finished ? 'todo-finished todo-item' : 'todo-item'}>
      <p>{todo.value}</p>
      <div>
        <FontAwesomeIcon className='item-button' icon={faPenToSquare} onClick={() => toggleEdit(todo.id)} />
        <FontAwesomeIcon className='item-button' icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  )
}

export default Item
