import React from 'react';
import useStyles from "./styles";
import {Box, Grid, Typography, Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import filter from "lodash/filter";
import {NumberActiveTodo, ItemOrItems} from "../../redux/slices/Todo";

function ToDoAction() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const Todos = useSelector((state) => state.todos.collection)
    const ActiveMyTodo = filter(Todos, (todo)  => !todo.isCompleted)
    const ItemOrItems = (ActiveMyTodo.length > 1) ? "items" : "item"

    // const AllTodo = () => {
    //     dispatch(AllTodo(All))
    // }
    // const ActiveTodo = () => {
    //     dispatch(ActiveTodo(Active))
    // }
    // const CompletedTodo = () => {
    //     dispatch(CompletedTodo(Completed))
    // }
    //  const ClearCompletedTodo = () => {
    //     dispatch(ClearCompletedTodo(ClearCompleted))
    //  }
    const Click = () => console.log(1)
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Typography classes={{root: classes.textstyle}} variant="subtitle2">
                {ActiveMyTodo.length} {ItemOrItems} left
            </Typography>
            <Box>
                <Button
                    //onClick={AllTodo}
                    classes={{root: classes.root}}>
                    All
                </Button>
                <Button
                    //onClick={ActiveTodo}
                    classes={{root: classes.root}}>
                    Active
                </Button>
                <Button
                    onClick={Click}
                    classes={{root: classes.root}}>
                    Completed
                </Button>
            </Box>
            <Button
                onClick={Click}
                classes={{root: classes.root}}>
                Clear completed
            </Button>
        </Grid>
    );
}

export default ToDoAction