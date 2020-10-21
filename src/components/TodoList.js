import React,{useState}  from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo,text,editTodo }) => {
  const [textinput,setTextinput]=useState(text);
const handelChange =(e) =>{
  setTextinput(e.target.value)
}

  return(
  



  <ul>
    {todos.map((todo) => (
      <div key={todo.id} >
        <Todo  {...todo} onClick={() => toggleTodo(todo.id)} />
        <button onClick={() => editTodo(todo.id,textinput)}>edit</button>
        <input value={textinput} onChange={handelChange} />
      </div>
    ))}
  </ul>
);
    }
export default TodoList;
