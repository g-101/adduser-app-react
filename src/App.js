import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = user => {
    setUsers(prevUsers => [user, ...prevUsers]);
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
