export const TodoCard = ({todo, markTodoAsDone}) => { 

   return <button onClick={()=> markTodoAsDone(todo.id, !todo.isDone)} 
   className={'bg-amber-400 font-black p-3 w-64 rounded-md'} key={todo.id}>
            <span> {todo.isDone ? '✅' : '🟩'} </span>
            <span> {todo.text} </span> 
           </button>
}