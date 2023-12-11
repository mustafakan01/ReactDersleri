import './App.css'
import Header from './assets/Header'
const name="Mustafa"
const surname="Kan"
const isLoggedIn=true


function App() {

  return (
    <div>
      {/* <h1>Selam Ben Bir React Projesiyim</h1>
      <Header></Header> */}
      <h1>{isLoggedIn ? `Benim adım ${name} soyadım ${surname}` : `Giriş yapınız.`}</h1>

    </div>
  )
}

export default App
