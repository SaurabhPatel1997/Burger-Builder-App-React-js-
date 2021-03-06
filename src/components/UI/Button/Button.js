import React from 'react';

import classes from './Button.css';
import { join } from 'path';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;

// join convert array of string to string