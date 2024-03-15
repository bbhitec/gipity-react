import { useState } from 'react'
import gipityLogo from './assets/gipity_logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState("response goes here")
  const [inputValue, setInputValue] = useState("tell me a random joke")

  // message requests from backend
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: inputValue
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      console.log(data)
      setMessage(data.choices[0].message)
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
      <p className="read-the-docs">
        {message.content}
      </p>
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
          Send
          {/* count is {count} */}
        </button>
      </div>
    </>
  )
}

export default App
