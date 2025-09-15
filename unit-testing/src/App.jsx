import { useState } from 'react'
import './App.css'
import "@testing-library/jest-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
       <>
       <h3>{count}</h3>
       <button onClick={() => setCount(count => count +1)}>Artır</button>
       </>
  )
}

export default App
