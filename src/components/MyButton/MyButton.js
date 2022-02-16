import React from 'react' 
import btnStyle from './MyButton.css'

const MyButton = ({children, changeText}) => {
  
    return <button className={"button"} onClick={() => changeText('Good!')}>{children}</button>
}

export default MyButton
