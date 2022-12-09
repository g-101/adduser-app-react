import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './UserForm.module.css';

function UserForm(props) {
  const [inUsername, setInUsername] = useState('');
  const [inAge, setInAge] = useState('');
  const [statusModal, setStatusModal] = useState();

  const usernameChangeHandler = event => {
    setInUsername(event.target.value);
  };
  const ageChangeHandler = event => {
    setInAge(event.target.value);
  };
  const statusHandler = () => {
    setStatusModal(null);
  };
  const addUserSubmitHandler = event => {
    event.preventDefault();
    if (inUsername.trim().length === 0 || inAge.trim().length === 0) {
      setStatusModal({
        title: 'Dados invalidos',
        message:
          'Por favor insira um nome ou idade com caracteres válidos( dados em branco não é permitido)',
      });
      return;
    }
    if (+inAge < 1) {
      setStatusModal({
        title: 'Dados invalidos',
        message: 'Por favor insira idade maior que zero',
      });
      return;
    }
    props.onAddUser({
      id: uuidv4(),
      name: inUsername,
      age: inAge,
    });
    console.log('form enviado');
    setInUsername('');
    setInAge('');
  };

  return (
    <>
      {statusModal && (
        <ErrorModal
          title={statusModal.title}
          message={statusModal.message}
          onConfirm={statusHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserSubmitHandler}>
          <label htmlFor="username">Nome do Usuário</label>
          <input id="username" type="text" value={inUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">Idade (Anos)</label>
          <input id="age" type="number" value={inAge} onChange={ageChangeHandler} />
          <Button type="submit">Adicionar Usuário</Button>
        </form>
      </Card>
    </>
  );
}

export default UserForm;
