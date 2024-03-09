import './input.css'
import { useEffect, useState } from 'react'

const Input = (props) => {
    const {
        id,
        label = "Enter text",
        type = "text",
        defaultValue = "",
        changeCallback = ""
        } = props

    const [inputValue, setInputValue] = useState(defaultValue)

    useEffect(() => {
        if (typeof changeCallback === "function") {
            changeCallback(inputValue)
        }
    }, [inputValue, changeCallback])
        
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input 
                type={type}
                id={id}
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}
            />
        </div>
    )
}

export default Input;