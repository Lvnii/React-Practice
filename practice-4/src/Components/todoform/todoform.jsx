import { useState } from 'react';
import './todoform.css'
import Input from '../shared/input/input';
import Button from '../shared/button/button';

const TodoForm = (props) => {
    const [todoInputValue, setTodoInputValue] = useState("")
    const { addTodo } = props

    return (
        <div className="todo-form">
            <form>
                <Input 
                    id="todo-input"
                    text="text"
                    label="Enter text"
                    defaultValue={todoInputValue}
                    changeCallback={setTodoInputValue}
                />
                <div className="button-container">
                    <Button 
                        text="Add todo"
                        click={() => {addTodo(todoInputValue)}}
                    />
                </div>
            </form>
        </div>
    )
}

export default TodoForm;