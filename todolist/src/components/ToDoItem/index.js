import React from 'react'
import {
  Checkbox,
  Grid,
  IconButton,
  Typography,
  ListItem,
  Divider,
  List
} from '@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import ClearIcon from '@material-ui/icons/Clear'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

// src
import useStyles from "./styles"
import { db } from "../myFirebase"





  function ToDoItem({singleToDo, isComplete, id, timestamp}) {
  const classes = useStyles({isCompleted: singleToDo.isCompleted})


  function deleteTodo() {
    db.collection("TodoList").doc(id).delete();
  }

  function checkTodo() {
    db.collection("TodoList").doc(id).update({
      isCompleted: !isComplete,
    });
  }

  return (
    <List className={classes.list}>
      <ListItem
        className={classes.list}
      >
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
        >

          <Grid item xs={11}>
            <Grid container
                  justifyContent="flex-start"
                  alignItems="center"
            >
              <Checkbox
                checked={isComplete}
                icon={<RadioButtonUncheckedIcon/>}
                checkedIcon={<CheckCircleOutlineIcon className={classes.checkIcon}/>}
                onChange={checkTodo}
              />
              <Typography noWrap className={classes.root}>
                {singleToDo.title}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={1}>
            <Grid
              justifyContent="flex-end"
              container
            >
              <IconButton onClick={deleteTodo}>
                <ClearIcon
                  className={classes.clear}
                />
              </IconButton>
            </Grid>
          </Grid>

        </Grid>
      </ListItem>
      <Divider/>
    </List>
  );
}

export default ToDoItem;