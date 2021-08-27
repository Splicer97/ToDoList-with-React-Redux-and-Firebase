import React from 'react';
import ToDoHead from "../ToDoHead";
import useStyles from "./styles";
import ToDoBody from "../ToDoBody";
import {Container, Grid, Paper} from "@material-ui/core";
import ToDoInput from "../ToDoInput";

function ToDoApp() {

    const classes = useStyles()

    return (
        <Container maxWidth="sm">
            <Grid container
                  justifyContent="center"
            >
                <ToDoHead/>
                <Grid item xs={12}>
                    <Paper square classes={{root: classes.shadow}}>
                        <ToDoInput/>
                        <ToDoBody/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ToDoApp;
