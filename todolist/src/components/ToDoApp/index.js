import React from 'react'
import {Container, Grid, Paper} from "@material-ui/core"

//src
import useStyles from "./styles"
import ToDoHead from "../ToDoHead"
import ToDoBody from "../ToDoBody"
import ToDoInput from "../ToDoInput"

function ToDoApp() {

  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <ToDoHead />

        <Grid item xs={12}>
          <Paper square
                 classes={{root: classes.shadow}}>
            <ToDoInput />
            <ToDoBody />
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default ToDoApp;
