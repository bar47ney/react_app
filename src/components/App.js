// import MyButton from "./MyButton/MyButton";
// import { useState } from "react";
// import ToggleButton from "./MyToggleButton/ToggleButton";
// import CounterHeader from "./Counter/CounterHeader";
// import CounterAdd from "./Counter/CounterAdd";
// import CounterSub from "./Counter/CounterSub";
// import CounterStudy from "./CounterStudy";
// import MyClassButton from "./MyClassButton/MyClassButton";

// function App() {
//   const [buttonText, setButtonText] = useState("Click me please!");
//   const [toggle, setToggle] = useState(false);
//   const [count, setCount] = useState(1);

//   const changeText = () => {
//     setButtonText("New text");
//   };

//   return (
//     <div className="App">
//       <MyButton action={changeText}>{buttonText}</MyButton>
//       <ToggleButton toggle={toggle} setToggle={setToggle}>
//         {toggle ? "One" : "Two"}
//       </ToggleButton>
//       <CounterHeader>Current count: {count}</CounterHeader>
//       <hr></hr>
//       <CounterAdd count={count} addCount={setCount}></CounterAdd>
//       <CounterSub count={count} subCount={setCount}></CounterSub>
//       <CounterStudy />
//       <MyClassButton />
//     </div>
//   );
// }

// export default App;

import Users from "./pages/Users";

const App = () => {
  return (
    <div className="App">
      {/* <UserList users={users} />
      <UserAdd /> */}
      <Users />
    </div>
  );
};

export default App;
