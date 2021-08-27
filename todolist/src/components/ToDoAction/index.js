import React from 'react';
import useStyles from "./styles";
import {Box, Grid, Typography, Button, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import filter from "lodash/filter";
import {Show, ClearCompleted, ChangeItems} from "../../redux/slices/Todo";

function ToDoAction() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const Todos = useSelector((state) => state.todos.collection)
    const ActiveMyTodo = filter(Todos, (todo) => !todo.isCompleted)
    const ItemOrItems = (ActiveMyTodo.length > 1) ? "items" : "item"

    const Change = (e) => {
        const choice = e.target.textContent
        dispatch(ChangeItems(choice))
        dispatch(Show())
    }
    const ClearCompletedTodo = () => {
        dispatch(ClearCompleted())
        dispatch(Show())
    }

    return (
        <Grid container xs={12}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
        >
                <Grid item xs={3}>
                    <Typography classes={{root: classes.textStyle}} variant="subtitle2">
                        {ActiveMyTodo.length} {ItemOrItems} left
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <Button
                            id="All"
                            onClick={Change}
                            classes={{root: classes.root}}>
                            All
                        </Button>
                        <Button
                            onClick={Change}
                            classes={{root: classes.root}}>
                            Active
                        </Button>
                        <Button
                            onClick={Change}
                            classes={{root: classes.root}}>
                            Completed
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        onClick={ClearCompletedTodo}
                        classes={{root: classes.root}}
                    >
                        {/*{isCompleted ? "items" : "item"}*/}
                         Clear completed
                    </Button>
                </Grid>
        </Grid>
    );
}
export default ToDoAction