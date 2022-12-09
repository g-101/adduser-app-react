import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const addNewUser = user => {
    setUsers(prevUsers => [user, ...prevUsers]);
    console.log(user);
  };
  console.log(users);
  return (
    <div>
      <UserForm onAddNewUser={addNewUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
