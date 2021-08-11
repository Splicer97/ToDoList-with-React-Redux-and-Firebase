import React from 'react';
import ToDoHead from "../ToDoHead";
import ToDoFirst from "../ToDoFirst";
import useStyles from "./styles";
import ToDoPlace from "../ToDoPlace";


function ToDoApp() {
    const classes = useStyles()
    return (
        <>
            <ToDoHead/>
            <ToDoFirst/>
            <ToDoPlace/>
        </>
    );
}

export default ToDoApp;