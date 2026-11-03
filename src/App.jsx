import { useState } from 'react'
import {forwardRef, useRef} from 'react'
import './App.css'



const MyInput= forwardRef((props,ref) => (
  <input ref={ref}{...props}/>
));

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
    <h1>React for</h1>
   <MyInput ref={inputRef} placeholder="Type something..." />
   <button onClick={focusInput}>Focus Input</button>
    </>
  )
}

export default App
