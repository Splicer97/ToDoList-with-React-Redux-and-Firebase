import React from 'react'
import {useSelector} from "react-redux";
import {Container, Grid, Paper} from "@material-ui/core"

//src
import useStyles from "./styles"
import ToDoHead from "../ToDoHead"
import ToDoBody from "../ToDoBody"
import ToDoInput from "../ToDoInput"

function ToDoApp() {
  const Todo = useSelector((state) => state.todos.collection)
  const classes = useStyles({Todo: Todo})


  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <ToDoHead />

        <Grid item xs={12}>


          <Paper square
            className={ classes.shadow}
            >
            <ToDoInput />
            <ToDoBody />
          </Paper>
        </Grid>

      </Grid>

    </Container>
  );
}

export default ToDoApp;
