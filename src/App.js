import './App.css';
import NewUserForm from './components/Users/NewUserForm'
import { useState } from 'react';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);


  const errorMessageHandler = (message) => {
    console.log(message);
  }

  const addUserHandler = (user) => {
    setUsers( prevUsers => { return [...prevUsers, user]})
  }

  return (
    <div className="App">
      <NewUserForm onErrorMessage={errorMessageHandler} onAddUser={addUserHandler}/>
      <UsersList users={users} />
    </div>
  );
}

export default App;
