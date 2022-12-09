import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './UserForm.module.css';

function UserForm(props) {
  const [inUsername, setInUsername] = useState('');
  const [inAge, setInAge] = useState('');

  const usernameChangeHandler = event => {
    setInUsername(event.target.value);
  };
  const ageChangeHandler = event => {
    setInAge(event.target.value);
  };
  const addUserSubmitHandler = event => {
    event.preventDefault();
    if (inUsername.trim().length === 0 || inAge.trim().length === 0) {
      return;
    }
    if (+inAge < 1) {
      return;
    }
    props.onAddNewUser({
      name: inUsername,
      age: inAge,
    });
    console.log('form enviado');
    setInUsername('');
    setInAge('');
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={inUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={inAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default UserForm;
