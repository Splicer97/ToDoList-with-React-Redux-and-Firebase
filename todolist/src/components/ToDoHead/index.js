import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import {Grid} from "@material-ui/core";


function ToDoHead() {
    const classes = useStyles()
    return (
        <Grid item xs={12}>
            <Grid container justifyContent="center">
                <Typography
                    align="center"
                    classes={{root: classes.qwerty}}
                    variant="inherit"
                    color="primary"
                >
                    todos
                </Typography>
            </Grid>
        </Grid>
    );
}

export default ToDoHead;