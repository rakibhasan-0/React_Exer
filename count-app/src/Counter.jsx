import React, { useState } from 'react';


function CounterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }


  const reset = () => {
    setCount(0);
  }


  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment} className='button'>Increment</button>
      <button onClick={decrement} className='button'>Decrement</button>
      <button onClick = {reset} className='button'>Reset</button>
    </>
   
  )



} 


export default CounterFunction; 