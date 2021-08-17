import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from "./styles";

function ToDoFirst({addTodo}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
    }
    const [text, setText] = useState("");
    const classes = useStyles()
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                label="What needs to be done?"
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

export default ToDoFirst;