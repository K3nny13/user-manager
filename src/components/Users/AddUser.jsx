import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddUser.module.css'

const AddUser = (props) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const ageHandler = (event) => {
    setAge(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (username.trim().length === 0) {
      return
    }

    if (+age < 1) {
      return
    }
    props.onAddUser(username, age)

    setUsername('')
    setAge('')
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={usernameHandler}
          value={username}
        ></input>
        <label htmlFor='age'>Age</label>
        <input id='age' type='text' onChange={ageHandler} value={age}></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
