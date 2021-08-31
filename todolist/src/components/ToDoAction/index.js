import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Grid, Typography, Button } from "@material-ui/core"
import {filter} from "lodash"
import pluralize from "pluralize"

// src
import useStyles from "./styles"
import {ClearCompleted, ChangeItems} from "../../redux/slices/Todo"

function ToDoAction() {
  const classes = useStyles({})
  const dispatch = useDispatch()

  const show = useSelector((state) => state.todos.show);
  const Todos = useSelector((state) => state.todos.collection)
  const ActiveMyTodo = filter(Todos, (todo) => !todo.isCompleted)
  const CompletedTodo = filter(Todos, (todo) => todo.isCompleted)
  const Item = pluralize('item', ActiveMyTodo.length, true)


  const Change = (status) => {
    dispatch(ChangeItems(status))
  }
  const ClearCompletedTodo = () => {
    dispatch(ClearCompleted())
  }

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid
        item
        xs={3}
      >
        <Typography
          classes={{root: classes.textStyle}}
          variant="subtitle2"
        >
          {Item} left
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="stretch"
        >
          <Button
            onClick={() => Change('all')}
            classes={{
              label: classes.root,
              root: show === 'all' && classes.active
            }}
          >
            All
          </Button>
          <Button
            onClick={() => Change('active')}
            classes={{
              label: classes.root,
              root: show === 'active' && classes.active
            }}
          >
            Active
          </Button>
          <Button
            onClick={() => Change('completed')}
            classes={{
              label: classes.root,
              root: show === 'completed' && classes.active
            }}
          >
            Completed
          </Button>
      </Grid>
      </Grid>
      <Grid item xs={3}>
        {CompletedTodo.length > 0 && (
          <Button
            onClick={ClearCompletedTodo}
            classes={{label: classes.root}}
          >
            Clear completed
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export default ToDoAction
