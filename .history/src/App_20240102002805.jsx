import { useEffect, useState } from 'react'
import './App.css'

function App() {


  const [input, setInput] = useState()

  useEffect(() => {
    const fetchShow = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=girls')
      const responseJson = response.json()
      console.log(responseJson)
    }
    fetchShow()
  }, [input])

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
      <button>Search</button>
    </>
  )
}

export default App
