import { useState, Fragment, useRef } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import styles from './AddUser.module.css'

const AddUser = (props) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState()

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const ageHandler = (event) => {
    setAge(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (username.trim().length === 0) {
      setError({
        title: 'Invalid name',
        message: 'Please enter a name and age',
      })
      return
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a age',
      })
      return
    }
    props.onAddUser(username, age)

    setUsername('')
    setAge('')
  }

  const resetErrorHandler = () => {
    setError(null)
  }

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          resetError={resetErrorHandler}
        />
      )}
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
    </Fragment>
  )
}

export default AddUser
