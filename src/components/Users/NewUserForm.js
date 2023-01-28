import { useState } from "react"
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const NewUserForm = (_props) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        const user = {
            username: username,
            age: age,
            id: Math.random().toString()
        }
        console.log(user);
        setUsername('');
        setAge('');
    }

    const userChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    return (<Card className={classes.input}>
        <form onSubmit={submitHandler}>
            <label htmlFor="user">User:</label>
            <input type='text' id="user" onChange={userChangeHandler} value={username} />
            <label htmlFor="age">Age</label>
            <input type='number' id="age" min='0' max='99' onChange={ageChangeHandler} value={age} />
            <button type="submit">Add User</button>
        </form>
    </Card>);
}

export default NewUserForm