import React from 'react'
import { useEffect, useState } from 'react'
import Form from '../../Form'
import List from '../../Lists'
import './style.css'



function Contacs() {
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
    <div id='container'>
        <List contacts={contacts}></List>
       <Form addContact={setContacts} contacts={contacts}></Form>
    </div>
  )
}

export default Contacs