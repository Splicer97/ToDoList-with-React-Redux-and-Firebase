import React from 'react'
import {Grid, Typography} from "@material-ui/core"

//src
import useStyles from "./styles"

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