import Card from "../UI/Card"
import classes from "./UsersList.module.css"

const UsersList = _props => {
    if (!_props.users) return;
    return (<Card className={classes.users}>
        <ul>
            {_props.users.map(user => {
                return <li>{user.username} ({user.age}) years old</li>
            })}
        </ul>
    </Card>)
}

export default UsersList