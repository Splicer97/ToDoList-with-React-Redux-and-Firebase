import React from 'react'
import { useDispatch } from "react-redux"
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
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ClearIcon from '@material-ui/icons/Clear'
import { green } from '@material-ui/core/colors'

// src
import {checkMyTodo, delTodo} from "../../redux/slices/Todo"
import useStyles from "./styles"

function ToDoItem({singleToDo, isComplete}) {
  const classes = useStyles({isCompleted: singleToDo.isCompleted})

  const dispatch = useDispatch()

  const checkTodo = () => {
    dispatch(checkMyTodo(singleToDo.id))
  }

  const deleteTodo = () => {
    dispatch(delTodo(singleToDo.id))
  }

  return (
    <List className={classes.list}>
      <ListItem
        className={classes.list}
        alignItems="flex-start"
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
        >
      <Grid item xs={1}>
        <Checkbox
          checked={isComplete}
          icon={<RadioButtonUncheckedIcon/>}
          checkedIcon={<CheckCircleIcon className={classes.icon}/>}
          onChange={checkTodo}
        />
      </Grid>

      <Grid item xs={10}>
        <Typography className={classes.root}>
          {singleToDo.title}
        </Typography>
      </Grid>

      <Grid item xs={1} >
        <IconButton onClick={deleteTodo}>
          <ClearIcon
            className={classes.clearColor}
          />
        </IconButton>
      </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </List>
);
}

export default ToDoItem;