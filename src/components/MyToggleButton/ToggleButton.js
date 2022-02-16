import React from 'react' 
import btnStyle from './ToggleButton.css'

const ToggleButton = ({children, toggle, setToggle}) => {
  
    return (
    <button 
        className={toggle ? 'button-red' : 'button-green'} 
        onClick={() => setToggle(!toggle)}
    >
        {children}
    </button>)
}

export default ToggleButton
