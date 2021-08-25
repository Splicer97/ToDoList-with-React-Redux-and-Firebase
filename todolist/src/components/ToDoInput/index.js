import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/slices/Todo";
import {v4} from "uuid";

function ToDoInput() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        const newTodo = {
            id: v4(),
            title: text,
            isCompleted: false,
        }
        dispatch(addTodo(newTodo))
        e.preventDefault();
        addTodo(text);
        setText("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField

                value={text}
                onChange={
                    (e) => setText(e.target.value)

                }
                placeholder="What needs to be done?"
                fullWidth
                       InputProps={{
                           startAdornment:
                               <InputAdornment position="start">
                                   <ExpandMoreIcon classes={{root: classes.root}} />
                               </InputAdornment>,
                       }}
            />
        </form>
    );
}

export default ToDoInput;