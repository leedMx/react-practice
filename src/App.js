import './App.css';
import NewUserForm from './components/Users/NewUserForm'
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);


  const errorMessageHandler = (message) => {
    console.log(message);
  }

  const addUserHandler = (user) => {
    console.log(user);
    setUsers( prevUsers => { return [user, ...prevUsers]})
    console.log(users)
  }


  return (
    <div className="App">
      <NewUserForm onErrorMessage={errorMessageHandler} onAddUser={addUserHandler}/>
    </div>
  );
}

export default App;
