import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
