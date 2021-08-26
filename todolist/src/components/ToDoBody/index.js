import React from 'react';
import useStyles from "./styles";
import ToDoItem from "../ToDoItem";
import ToDoAction from "../ToDoAction";
import { Grid, Paper} from "@material-ui/core";
import {useSelector} from "react-redux";


function ToDoBody() {
    const Todo = useSelector((state) => state.todos.collection);
    const classes = useStyles()

    return (
        <Grid item xs={12}>
            <Grid container>
                {Todo.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        singleToDo={todo}
                    />
                ))}
                <Paper square>
                <ToDoAction
                />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ToDoBody;