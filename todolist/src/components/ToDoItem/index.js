import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "./styles";
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import {checkMyTodo, delTodo} from "../../redux/slices/Todo";
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@material-ui/core";


function ToDoItem({singleToDo}) {
    const classes = useStyles({isCompleted: singleToDo.isCompleted})

    const dispatch = useDispatch();


    const checkTodo = () => {
        dispatch(checkMyTodo(singleToDo.id))
    }
    const deleteTodo = () => {
        dispatch(delTodo(singleToDo.id))
    }


    return (
        <Grid item xs={12}>
           <Grid container>
               <Grid item>
                   <FormControlLabel
                       control={<Checkbox color="primary" />}
                       // label={singleToDo.title}
                       onChange={checkTodo}
                   />
               </Grid>
               <Grid item>
                   <Typography className={classes.root}>{singleToDo.title}</Typography>
               </Grid>
               <Grid item>
                   <IconButton
                   onClick={deleteTodo}>
                       x


                   </IconButton>
               </Grid>
           </Grid>
        </Grid>
    );
}

export default ToDoItem;