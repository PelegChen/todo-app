import { useState } from 'react'
 
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    id : 1,
    text : 'Take the dog for a walk',
    isDone : false
  }])
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>My todo app</h1>
      <h2> Unfinished</h2>
      <div>
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
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
      
      </div>
     
    </>
  )
}

export default App
