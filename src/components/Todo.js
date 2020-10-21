import React from 'react';
const Todo = ({ onClick, completed, text }) => {


return(

  <div>
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
    
    
  </div>
);}

export default Todo;