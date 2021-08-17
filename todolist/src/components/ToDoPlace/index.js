import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "./styles";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

function ToDoPlace({title, checkTodo, id, isCompleted, deleteTodo}) {
    const markComplete = () => checkTodo(id)
    const delTodo = () => deleteTodo(id)
    const classes = useStyles()
    const todoStyle = isCompleted ? {textDecoration: 'line-through' } : {textDecoration: 'none' };
    return (
            <form>
                <TextField id="standard-basic"
                           defaultValue={title}
                           label="Second Position"
                           fullWidth
                           style={todoStyle}
                           InputProps={{
                               startAdornment:
                                   <InputAdornment position="start">
                                       <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />}
                                           onChange={markComplete}
                                       />
                                   </InputAdornment>,

                           endAdornment:
                    <InputAdornment position="end">
                        <IconButton
                            onClick={delTodo}
                          >
                            <ClearIcon style={{ color: "#e3d2d1" }}/>
                        </IconButton>
                    </InputAdornment>
                           }}
                />
            </form>
    );
}

export default ToDoPlace;