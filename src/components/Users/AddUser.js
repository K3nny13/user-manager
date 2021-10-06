import { useEffect } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = props => {
  // const [username, setUsername] = useEffect('');
  // const [age, setAge] = useEffect('');


  const submitHandler = event => {
    event.preventDefault();
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'></input>
        <label htmlFor='age'>Username</label>
        <input id='age' type='text'></input>
        <button type='submit'>Add User</button>
      </form>
    </Card>
  )
}

export default AddUser;