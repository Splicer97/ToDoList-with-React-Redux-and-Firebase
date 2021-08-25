import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "./styles";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import {checkMyTodo, delTodo} from "../../redux/slices/Todo";
import {useDispatch, useSelector} from "react-redux";


function ToDoItem({title}) {
    const dispatch = useDispatch();

    const Todo = useSelector((state) => state.todos.collection);

    const checkTodo = (id) => {
        dispatch(checkMyTodo(id))
    }
    const deleteTodo = (id) => {
        dispatch(delTodo(id))
    }
    const classes = useStyles()
    const todoStyle = Todo.isCompleted ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
    return (
        <form>
            <TextField
                defaultValue={title}
                fullWidth
                style={todoStyle}
                InputProps={{
                    startAdornment:
                        <InputAdornment position="start">
                            <Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<RadioButtonCheckedIcon/>}
                                      onChange={checkTodo}
                            />
                        </InputAdornment>,

                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton

                                onClick={deleteTodo}
                            >
                                <ClearIcon style={{color: "#e3d2d1"}}/>
                            </IconButton>
                        </InputAdornment>
                }}
            />
        </form>
    );
}

export default ToDoItem;