import MyButton from "./MyButton/MyButton";
import { useState } from "react";
import ToggleButton from "./MyToggleButton/ToggleButton";
import CounterHeader from "./Counter/CounterHeader";
import CounterAdd from "./Counter/CounterAdd";
import CounterSub from "./Counter/CounterSub";


function App() {
  const [buttonText, setButtonText] = useState('Click me please!')
  const [toggle, setToggle] = useState(false)

  const [count, setCount] = useState(1)

  return (
    <div className="App">
      <MyButton changeText={setButtonText}>{buttonText}</MyButton>

      <ToggleButton 
      toggle={toggle} 
      setToggle={setToggle}
      >
        {toggle ? 'One' : 'Two'}
      </ToggleButton>


      <CounterHeader>Current count: {count}</CounterHeader>
      <hr></hr>
      <CounterAdd count={count} addCount={setCount}></CounterAdd>
      <CounterSub count={count} subCount={setCount}></CounterSub>
    </div>
  );
}

export default App;
