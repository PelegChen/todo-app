import { useState } from 'react'
 
import './App.css'
import { TodoCard } from './components/TodoCard'

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
 const markTodoAsDone = (todoId, value) => {
  const newTodos = todos.map(todo=> {
    if (todo.id === todoId){
      todo.isDone = value
    }
    return todo
  })
  setTodos (newTodos)

 }
 
  return (
    <> 
      <h1 className='text-4xl text-purple-950 font-bold mb-2'>My todo app</h1>
    
      <div  className='flex flex-col items-center gap-5'>
        {
         todos.map(todo=>  
           <TodoCard key={todo.id} todo={todo} markTodoAsDone={markTodoAsDone}/>
          )
        }
      </div>
      <div className="card">
        <button className='bg-amber-950 text-white py-3 px-6 rounded' onClick={() => {
          addTodo()
        }}>
         Add a todo
        </button>
      
      </div>
     
    </>
  )
}

export default App
