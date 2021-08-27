import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "./styles";
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {checkMyTodo, delTodo} from "../../redux/slices/Todo";
import {useDispatch, useSelector} from "react-redux";
import {FormControlLabel, Paper, Typography} from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import {Active, Show, ClearCompleted, ChangeItems} from "../../redux/slices/Todo";

function ToDoItem({singleToDo, isComplete}) {
    const classes = useStyles({isCompleted: singleToDo.isCompleted})

    const dispatch = useDispatch();


    const checkTodo = () => {
        dispatch(checkMyTodo(singleToDo.id))
        dispatch(Show())
    }
    const deleteTodo = () => {
        dispatch(delTodo(singleToDo.id))
        dispatch(Show())
    }


    return (
            <Grid container xs={12}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
            >
                <Grid
                    item
                    xs={1}
                    justifyContent="center"
                >
                    <Checkbox
                        checked={isComplete}
                        icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon style={{ color: green[500] }} />}
                        onChange={checkTodo}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography className={classes.root}>{singleToDo.title}</Typography>
                </Grid>
                <Grid item xs={1}
                      justifyContent="flex-end"
                >
                    <IconButton
                        onClick={deleteTodo}>
                        <ClearIcon style={{ color: "#e3d2d1" }}/>
                    </IconButton>
                </Grid>
            </Grid>
    );
}

export default ToDoItem;