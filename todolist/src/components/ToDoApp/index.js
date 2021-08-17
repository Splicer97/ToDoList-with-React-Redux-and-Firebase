import React, {useState} from 'react';
import ToDoHead from "../ToDoHead";
import useStyles from "./styles";
import ToDoBox from "../ToDoBox";
import {Container, Paper} from "@material-ui/core";
import {v4} from "uuid";

function ToDoApp() {
    const classes = useStyles()
    const [todos, setTodos] = useState([

    ])
    const checkTodo = (id) => {
        console.log(id);
        setTodos(
            todos.map((todo => {
            if (todo.id === id)
                todo.isCompleted = !todo.isCompleted;
            console.log(todo.isCompleted);
            return todo
        })))
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => !(todo.id === id)))
    }

    return (
        <Container maxWidth="sm">
            <ToDoHead/>
            <Paper square classes={{root: classes.shadow}}>
            <ToDoBox
                todos={todos}
                      checkTodo={checkTodo}
                      setTodos={setTodos}
                      deleteTodo={deleteTodo}/>
        </Paper>
        </Container>
    );
}

export default ToDoApp;