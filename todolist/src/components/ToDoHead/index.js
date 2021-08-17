import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import {Grid} from "@material-ui/core";


function ToDoHead() {
    const classes = useStyles()
    return (
        <Grid justifyContent="center">
            <Typography
                align="center"
                classes={{root: classes.qwerty}}
                variant="h1"
                color="primary">
                todos
            </Typography>
</Grid>
    );
}

export default ToDoHead;