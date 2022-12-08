import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './UserForm.module.css';

function UserForm() {
  const addUserSubmitHandler = event => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserSubmitHandler}>
        <label for="username">Username</label>
        <input id="username" type="text" />
        <label for="age">Age(Years)</label>
        <input id="age" type="number" />
        <Button type="submit" text="Add User" />
      </form>
    </Card>
  );
}

export default UserForm;
