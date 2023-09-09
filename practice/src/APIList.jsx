import React, { useEffect, useState } from 'react'

export default function APIList() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    fetch('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
      .then((response) => response.json())
      .then(setUsers)
      .finally(() => setIsLoading(false))

      return () => {
        controller.abort()
      }
  }, [])
  return (
    <>
      <h1>User List</h1>
      {isLoading? <h2>Loading...</h2> :
      <ul>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <li>{user.name}</li>
          </React.Fragment>
        ))}
      </ul>
      }
    </>
  )
}
