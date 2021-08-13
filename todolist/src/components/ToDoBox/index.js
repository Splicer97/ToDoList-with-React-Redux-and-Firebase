import React from 'react';
import useStyles from "./styles";
import ToDoFirst from "../ToDoFirst";
import ToDoPlace from "../ToDoPlace";


function ToDoBox() {
    const classes = useStyles()
    return (
        <>
            <ToDoFirst/>
            <ToDoPlace/>
        </>
    );
}

export default ToDoBox;