import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';

function App() {
  const addNewUser = user => {
    console.log(user);
  };
  return (
    <div>
      <UserForm onAddNewUser={addNewUser} />
    </div>
  );
}

export default App;
