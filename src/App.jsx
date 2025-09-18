import React, { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }


  return (
    <div className="input-container">
      <input type="text" placeholder="Type something..." value={inputValue} onChange={handleInputChange} />
      <p className="display-text"> {inputValue}</p>
    </div>
  )
}

export default App