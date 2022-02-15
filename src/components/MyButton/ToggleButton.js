import React from 'react' 

const ToggleButton = ({children, toggle, setToggle}) => {
  
    return <button onClick={() => setToggle(!toggle)}>{children}</button>
}

export default ToggleButton
