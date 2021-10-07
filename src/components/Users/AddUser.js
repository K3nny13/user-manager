import { useEffect } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = props => {
  // const [username, setUsername] = useEffect('');
  // const [age, setAge] = useEffect('');


  const submitHandler = event => {
    event.preventDefault();
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'></input>
        <label htmlFor='age'>Age</label>
        <input id='age' type='text'></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;