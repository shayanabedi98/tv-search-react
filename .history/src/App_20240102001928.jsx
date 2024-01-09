import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState()

  useEffect(, [input])

  return (
    <>
      <input type="text" />
      <button>Search</button>
    </>
  )
}

export default App
