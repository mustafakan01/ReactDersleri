import { useState } from 'react'
import './App.css'
import Contacs from './components/Contacts/Index'
import List from './Lists'
import Form from './Form'



function App() {

  return (
    <div>
      <Contacs></Contacs>

      <Form></Form>

      <List></List>
    </div>
  )
}

export default App
