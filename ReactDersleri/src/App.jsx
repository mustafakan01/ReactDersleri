import './App.css'
import Header from './Header'
import User from './User'


function App() {

  return (
    <div>
      {/* <h1>Selam Ben Bir React Projesiyim</h1>
      <Header></Header> */}
      {/* <h1>{isLoggedIn ? `Benim adım ${name} soyadım ${surname}` : `Giriş yapınız.`}</h1> */}

      <User name="Mustafa" surname="Kan" isLoggedIn={true} friends={["Eda", "Ahmet", "Elif"]}></User>

    </div>
  )
}

export default App
