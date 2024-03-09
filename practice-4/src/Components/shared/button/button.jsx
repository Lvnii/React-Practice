import './button.css'

const Button = (props) => {
    const {text, click, type = "button"} = props

    return (
        <button 
            type={type}
            className='custom-button'
            onClick={click}
        >{text}</button>
    )
}

export default Button;