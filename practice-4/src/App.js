import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/todoform/todoform';
import TodoList from './Components/todolist/todolist';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])

  const handleAddTodo = (todoText) => {
    const list = [...todoList]
    let todoItem;

    if (list.length === 0) {
      todoItem = {
        id: 0,
        text: todoText
      }
    } else {
      todoItem = {
        id: list[list.length - 1].id + 1,
        text: todoText
      }
    }

    list.push(todoItem)
    setTodoList(list)
    console.log(todoItem.id)
  }

  const handleRemoveTodo = (todoId) => {
    const list = [...todoList.filter((item) => item.id !== todoId)]
    setTodoList(list)
  }

  return (
    <div className="App">
      <div className='todo-form-container'>
        <TodoForm 
          addTodo={handleAddTodo}
        />
      </div>
      <div className='todo-list-container'>
        <TodoList data={todoList} removeTodo={handleRemoveTodo}/>
      </div>
    </div>
  );
}


export default App;
