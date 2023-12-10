import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Header'
const name="Mustafa"
const surname="Kan"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>Selam Ben Bir React Projesiyim</h1>
      <Header></Header> */}
      <h1>Benim adım {name} soyadım {surname}</h1>

    </div>
  )
}

export default App
