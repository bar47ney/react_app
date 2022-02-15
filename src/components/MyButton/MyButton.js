import React from 'react' 

const MyButton = ({children, changeText}) => {
  
    return <button onClick={() => changeText('Good!')}>{children}</button>
}

export default MyButton

автваавтавт