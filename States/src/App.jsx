import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css'
import InputExample from './components/InputExample';


function App() {
  const [name, setName] = useState("Mustafa")
  const [friends, setFriends]= useState(["Eda", "Elif"])
  const [adress, setAdress] = useState({title:"Adana", zip: 10010 })

  return (
    <div>
      <h1>Merhaba {name}</h1> <br />
      <button onClick={()=> setName("Eda")}>Değiştir</button>

      <hr /> <br />

      <h2>Arkadaşlar</h2>
      {friends.map((friend, index) => (
      <div key={index}>{friend}</div>
      ))} <br />

      <button onClick={()=> setFriends ([...friends, "Hasan"])}>Yeni arkadaş ekle </button>

      <hr /> <br />

      <h2>Adres</h2>
      <div>
        {adress.title} {adress.zip}
      </div><br />

      <button onClick={()=> setAdress ({title:"Mersin", zip: 333333})}>Adres değiştir </button>
      <hr /><br />

      
      <Counter></Counter> <hr /><br />

      <InputExample></InputExample>

    </div>
  )
}

export default App
