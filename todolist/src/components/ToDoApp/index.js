import React from 'react';
import ToDoHead from "../ToDoHead";
import ToDoFirst from "../ToDoFirst";
import useStyles from "./styles";


function ToDoApp() {
    const classes = useStyles()
    return (
        <>
            <ToDoHead/>
            <ToDoFirst/>
        </>
    );
}

export default ToDoApp;