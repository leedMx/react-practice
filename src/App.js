import './App.css';
import NewUserForm from './components/Users/NewUserForm'
import { useState } from 'react';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers( prevUsers => { return [...prevUsers, user]})
  }

  return (
    <div className="App">
      <NewUserForm onAddUser={addUserHandler}/>
      <UsersList users={users} />
    </div>
  );
}

export default App;
