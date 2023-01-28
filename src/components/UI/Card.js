import classes from "./Card.module.css";

const Card = (_props) => {
    return <div className={`${classes.card} ${_props.className}`}>{_props.children}</div>
}

export default Card