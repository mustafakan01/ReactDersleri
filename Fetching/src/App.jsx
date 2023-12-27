import { useState } from 'react'
import User from './componets/User'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <User></User>
    </div>
  )
}

export default App
