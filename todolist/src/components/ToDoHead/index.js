import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";


function ToDoHead() {
    const classes = useStyles()
    return (
            <Typography classes={{root: classes.qwerty}} variant="h1" color="primary">
                todolist
            </Typography>
    );
}

export default ToDoHead;