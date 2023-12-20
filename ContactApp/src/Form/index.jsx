import React, { useState } from 'react'

function Form() {

    const [form, setForm]= useState({fullname:"", phone_number:""})

    const onChanceInput=(e)=>{
        setForm({...from,[e.target.name]:e.target.value})
    }

  return (
    <div>
        <div>
            <input name='fullname' placeholder='İsim' onChange={onChanceInput}/>
        </div>

        <div>
            <input name='phone_number' placeholder='Numara'onChange={onChanceInput}/>
        </div>
    </div>
  )
}

export default Form