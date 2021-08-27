import React from 'react';
import useStyles from "./styles";
import ToDoItem from "../ToDoItem";
import ToDoAction from "../ToDoAction";
import { Grid, Paper} from "@material-ui/core";
import {useSelector} from "react-redux";
import filter from "lodash/filter"


function ToDoBody() {
    const Todo = useSelector((state) => state.todos.showCollection);
    const classes = useStyles()



    return (
        <Grid item xs={12}>
            <Grid container>
                {Todo.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        singleToDo={todo}
                        isComplete={todo.isCompleted}
                    />
                ))}
                {Todo.length !== 0 ? <ToDoAction/> : ""}
            </Grid>
        </Grid>
    );
};

export default ToDoBody;