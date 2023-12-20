import { useEffect, useState } from 'react'
import './App.css'
import Contacs from './components/Contacts/Index'
import List from './Lists'
import Form from './Form'



function App() {

  const [contacts, setContacts]=useState([])

  useEffect(()=>{
    console.log(contacts)
  }, [contacts])

  return (
    <div>
      <Contacs></Contacs>

      <Form addContact={setContacts} contacts={contacts}></Form>

      <List></List>
    </div>
  )
}

export default App
