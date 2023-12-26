import {useState} from 'react'

function List({contacts}) {

  const[filterText, setFilterText]=useState("")

  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
    item[key]
    .toString()
    .toLowerCase()
    .includes(filterText.toLocaleLowerCase())
    )})

  return (
    <div>
      <div>
        <input placeholder='Filtrele' value={filterText} onChange={(e)=> setFilterText(e.target.value)} />
      </div>

      <ul>
        {filtered.map((contact, i) => (
           <li key={i}>{contact.fullname}</li>
           ))}
      </ul>
    </div>
  )
}

export default List