import { useState } from 'react'
const NameCounter = () => {
  const [name, setName] = useState('Miguel')
  const [age, setAge] = useState(0)

  return (
    <div>
      <input
        type='text'
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Hi my name is {name} and I am {age} years old.
      <br />
      <button
        onClick={() => {
          const newAge = age-1
          if (newAge >= 0) setAge(newAge)
          else setAge(0)
        }}
      >
        -
      </button>
      <button onClick={() => setAge(age + 1)}>+</button>
    </div>
  )
}

export default NameCounter
