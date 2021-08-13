import React from 'react';
import ToDoHead from "../ToDoHead";
import useStyles from "./styles";
import ToDoBox from "../ToDoBox";
import {Container} from "@material-ui/core";


function ToDoApp() {
    const classes = useStyles()
    return (
        <>
            <Container maxWidth="sm">
            <ToDoHead/>
            <ToDoBox/>
        </Container>
        </>
    );
}

export default ToDoApp;