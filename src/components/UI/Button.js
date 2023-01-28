import React from "react";
import classes from "./Button.module.css";

const Button = _props => {
    return (<button className={classes.button}
        type={_props.type}
        onClick={_props.onClick}>{_props.children}</button>);
}

export default Button;