import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';


function App() {
  const [todo,setTodo] = useState(initialState);
  return (
    <div className='layout'>
      <div className='container'>
        <div >My Todo List</div>
        <div>React</div>
        </div>
      <div>
        <Input setTodo = {setTodo} todo={todo} ></Input>
        <TodoList isActive={true} todo={todo} setTodo ={setTodo}></TodoList>
        <TodoList isActive={false} todo={todo} setTodo ={setTodo}></TodoList>
      </div>
      
    </div>
  )
}

export default App;

const initialState = [{
  title : '리액트 공부하기',
  contents : '리액트 기초를 공부해 봅시다.',
  isDone : false,
  id : 0,
},
{
  title : '리액트 공부하기',
  contents : '리액트 기초를 공부해 봅시다.',
  isDone : true,
  id : 1,
},

]