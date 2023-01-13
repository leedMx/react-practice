import { useState } from "react"

const NewUserForm = (_props) => {
    const [isValid, setValid] = useState(false);
    const [user, setUser] = useState("");
    const [age, setAge] = useState(1);

    const submitHandler = (event) => {
        event.preventDefault();
        const user = {username: "username", age: 33, id: Math.random().toString()}
        _props.onAddUser(user);
    }

    const userChangeHandler = (event) => {
        setUser(event.target.value);
        const validity = !(user.trim === '');
        setValid(validity)
        if (!isValid)
            _props.onErrorMessage("Invalid Username");
    }

    const ageChangeHandler = (event) => {
        const value = event.target.value;
        const validity = value > 0;
        setValid(validity);
        if (!isValid)
            _props.onErrorMessage("Invalid age value");
    }

    return <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="user">User:</label>
            <input type='text' id="user" onChange={userChangeHandler} value={user}></input><br />
            <label htmlFor="age">Age</label>
            <input type='number' id="age" min='0' max='99' onChange={ageChangeHandler}></input><br />
            <button type="submit">Add User</button>
        </form>
    </div>;
}

export default NewUserForm