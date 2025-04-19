import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) =>  prev + 1)
    setCount((prev) =>  prev + 1)
    setCount((prev) =>  prev + 1)
    setCount((prev) =>  prev + 1)
    setCount((prev) =>  prev + 1)
  }
  const removeCount = () => {
    setCount((prev) =>  prev - 1)
    setCount((prev) =>  prev - 1)
    setCount((prev) =>  prev - 1)
    setCount((prev) =>  prev - 1)
    setCount((prev) =>  prev - 1)
  }
  return (
    <>
      <h1>Most Asked in Interview Question : {count}</h1>
      <p>Curent count is : {count}</p>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Add</button> */}
      {/* <button onClick={() => setCount((prev) => prev - 1)}>Remove</button> */}
      <button onClick={addCount}>Add</button>
      <button onClick={removeCount}>Remove</button>
      <p>I am footer : {count}</p>
    </>
  );
}

export default App;
