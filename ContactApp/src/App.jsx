import { useEffect, useState } from 'react'
import './App.css'
import Contacs from './components/Contacts/Index'
import List from './Lists'
import Form from './Form'



function App() {

  const [contacts, setContacts]=useState([
    {
      fullname:"Mustafa",
      phone_number:"12345"
    },
    {
      fullname:"Eda",
      phone_number:"2341412"
    },
    {
      fullname:"Hasan",
      phone_number:"852369"
    },
  ])

  useEffect(()=>{
    console.log(contacts)
  }, [contacts])

  return (
    <div>
      <Contacs></Contacs>

      <Form addContact={setContacts} contacts={contacts}></Form>

      <List contacts={contacts}></List>
    </div>
  )
}

export default App
