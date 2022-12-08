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
    props.addNewUser({
      name: inUsername,
      age: inAge,
    });
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserSubmitHandler}>
        <label for="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label for="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default UserForm;
