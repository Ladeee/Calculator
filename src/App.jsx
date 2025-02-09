import { useState } from 'react'
import Input from './components/input'
import Operators from './components/operators'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleClick = (value) => {
    if (value === 'C') {
      setInputValue('')
    } else if (value === 'DEL') {
      setInputValue(inputValue.toString().slice(0, -1))
    } else if (value === '=') {
      setInputValue(String(Function('"use strict";return (' + inputValue + ')')()))
    } else {
      setInputValue(inputValue + value)
    }
  }
  

  return (
    <div className="app">
      <div className="logo">Trusty Calculator</div>
      <div className="app-wrapper">
        <div className="calculator-wrapper">
          <Input inputValue={inputValue} />
          <Operators handleClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default App
