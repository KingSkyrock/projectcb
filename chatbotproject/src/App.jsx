import { useState, useRef } from 'react'
import './App.css'
import axios from "axios";


function App() {
  const [count, setCount] = useState(0)
  const tokenInput = useRef(null)

  function handleShopifyToken() {
    axios.post('/shopifyToken', {token: tokenInput.current.value}, {}).then((res) => {
        
    })
  }

  return (
    <>
      <div>Shopify API Test</div>
      <p>Enter Shopify API Token:</p>
      <input ref={tokenInput}></input>
      <button onClick={() => handleShopifyToken()}>Submit</button>
    </>
  )
}

export default App
