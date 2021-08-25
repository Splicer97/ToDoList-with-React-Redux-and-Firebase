import React from 'react';
import ToDoHead from "../ToDoHead";
import useStyles from "./styles";
import ToDoBox from "../ToDoBox";
import {Container, Grid, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux"
import {delTodo, checkMyTodo} from "../../redux/slices/Todo";

function ToDoApp() {
    const classes = useStyles()
    const dispatch = useDispatch();

    const Todo = useSelector((state) => state.todos.collection);

    const checkTodo = (id) => {
        dispatch(checkMyTodo(id))
    }

    const deleteTodo = (id) => {
        dispatch(delTodo(id))
    }

    return (
        <Container maxWidth="sm">
            <Grid justifyContent="center">
                <ToDoHead/>
                <Paper square classes={{root: classes.shadow}}>
                    <ToDoBox
                        checkTodo={checkTodo}
                        deleteTodo={deleteTodo}
                    />
                </Paper>
            </Grid>
        </Container>

    );
}

export default ToDoApp;
