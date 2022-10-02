import React from 'react';
import classes from '../Button/Button.module.css';

const Button = (props) => {
    return (
        <Button className={`${props.children} ${classes.button}`}>{props.children}</Button>
    )
}

export default Button;