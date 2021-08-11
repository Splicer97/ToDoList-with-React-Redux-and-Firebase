import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from "./styles";

function ToDoFirst() {
    const classes = useStyles()
    return (
        <form>
            <TextField id="standard-basic" label="What needs to be done?"
                       InputProps={{
                           startAdornment: <InputAdornment position="start"> <ExpandMoreIcon classes={{root: classes.root}} /></InputAdornment>,
                       }}
            />
        </form>
    );
}

export default ToDoFirst