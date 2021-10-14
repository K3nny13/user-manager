import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
import { useState, Fragment } from 'react'

function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (userName, userAge) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        { name: userName, age: userAge, id: Math.random().toString() },
      ]
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList data={users} />
    </Fragment>
  )
}

export default App
