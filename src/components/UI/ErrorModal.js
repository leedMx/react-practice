import Button from "./Button"
import Card from "./Card"
import classes from "./ErrorModal.module.css"

const ErrorModal = _props => {
    return <div><div className={classes.backdrop}>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{_props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{_props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button>Okay</Button>
            </footer>
        </Card>
    </div>
    </div>
}

export default ErrorModal