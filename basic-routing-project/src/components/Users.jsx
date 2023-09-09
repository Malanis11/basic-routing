import axios from 'axios'
import { useState, useEffect } from 'react'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/users')
    .then(res => {
      const allUsers = res.data
      console.log(allUsers)
      allUsers.map(user => {
        setUsers(prevUsers => [...prevUsers, user])
      })
    })
  },[])

  return (
    <div className="container">
      <h1>Users</h1>
      <div className="card-grid">
        {users.map(user => {
          return (
            <div className="card" key={user.id}>
              <div className="card-header">{user.name}</div>
              <div className="card-body">
                <div>{user.company.name}</div>
                <div>{user.website}</div>
                <div>{user.email}</div>
              </div>
              <div className="card-footer">
                <a className='btn' href="#">View</a>
              </div>
            </div>
          )
        })
        }
        
      </div>
    </div>
  )
}

export default Users