export const TodoCard = ({todo, markTodoAsDone}) => { 

   return <button onClick={()=> markTodoAsDone(todo.id, !todo.isDone)} 
   className={'bg-green-200'} key={todo.id}>
            <span> {todo.isDone ? '✅' : '🟩'} </span>
            <span> {todo.text} </span> 
           </button>
}