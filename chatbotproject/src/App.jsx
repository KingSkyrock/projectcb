import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const tokenInput = useRef(null)

  function handleShopifyToken() {
    alert(tokenInput.current.value);
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
