import React, {useState} from 'react';
import ToDoHead from "../ToDoHead";
import useStyles from "./styles";
import ToDoBox from "../ToDoBox";
import {Container} from "@material-ui/core";

function ToDoApp() {
    const classes = useStyles()
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Play",
            isCompleted: false,
        },
        {
            id: 2,
            title: "Play Cricket",
            isCompleted: true,
        },
        {
            id: 3,
            title: "Play Criffcket",
            isCompleted: true,
        },
        {
            id: 4,
            title: "Play Cricfket",
            isCompleted: true,
        },
    ])


    return (
        <>
            <Container maxWidth="sm">
            <ToDoHead/>
            <ToDoBox  todos={todos}/>
        </Container>
        </>
    );
}

export default ToDoApp;