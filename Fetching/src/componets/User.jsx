import React, {useState , useEffect } from 'react'


function User() {

    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json(res))
        .then((users)=>setUsers(users))
    },[]);

  return (
    <div>
        <h1>Users</h1>
        {
            users.map(user=> <div key={user.id}>{user.name}</div>)
        }
    </div>
  )
}

export default User