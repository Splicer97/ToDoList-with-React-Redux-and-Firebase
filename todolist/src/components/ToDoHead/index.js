import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import {Grid, Container} from "@material-ui/core";


function ToDoHead() {
    const classes = useStyles()
    return (
            <Grid container justifyContent="center">
            <Typography
                align="center"
                classes={{root: classes.qwerty}}
                variant="inherit"
                color="primary">
                todos
            </Typography>
            </Grid>
    );
}

export default ToDoHead;