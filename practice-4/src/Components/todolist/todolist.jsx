import Button from '../shared/button/button'
import './todolist.css'

const TodoList = (props) => {
    const { data, removeTodo } = props
    
    console.log(data)
    return (
        <div className='todo-list'>
            {data.length > 0 ? (
                <ul>
                    {data.map((item) => {
                        return (
                            <li key={item.id}>
                                <span>{item.text}</span>
                                <Button 
                                    text="remove" 
                                    click={() => {removeTodo(item.id)}}
                                />
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <h2>There is no information</h2>
            )
        }
        </div>
    )
}

export default TodoList;