import { useState } from 'react'
import gipityLogo from './assets/gipity_logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState(null)
  const [inputValue, setInputValue] = useState(null)

  // message requests from backend
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello, whatsup?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      console.log(data)
      setMessage(data.choises[0].message)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(inputValue)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={gipityLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>gipity</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        <p>
          {/* Edit <code>src/App.jsx</code> and save to test HMR */}
          <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
        </p>
        <button onClick={getMessages}>
          Test
          {/* count is {count} */}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
