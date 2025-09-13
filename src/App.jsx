import { useState } from 'react'
 
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    id : (Math.random() * 10000) ,
    text : 'Take the dog for a walk',
    isDone : false
  }])
 const addTodo = ( ) => {
  const todoText = prompt('Add a todo')
  const newTodo = {
    text : todoText,
    isDone : false,
    id : (Math.random() * 10000)
  }
  setTodos([...todos, newTodo]) 
 }

  return (
    <>
     
      <h1>My todo app</h1>
      <h2> Unfinished</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        {
         todos.map(todo=>  
           <div className="todo-item" key={todo.id}>
            <span> {todo.isDone ? '✅' : '🟩'} </span>
            <span> {todo.text} </span>
           </div>
          )
        }
      </div>
      <div className="card">
        <button onClick={() => {
          addTodo()
        }}>
         Add a todo
        </button>
      
      </div>
     
    </>
  )
}

export default App
