import React from 'react';
import ToDoHead from "../ToDoHead";
import useStyles from "./styles";
import ToDoBody from "../ToDoBody";
import {Container, Grid, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux"
import {delTodo, checkMyTodo} from "../../redux/slices/Todo";
import ToDoInput from "../ToDoInput";

function ToDoApp() {

    return (
        <Container maxWidth="sm">
            <Grid container>
                <ToDoHead/>
                <ToDoInput/>
                <ToDoBody/>
            </Grid>
        </Container>

    );
}

export default ToDoApp;
