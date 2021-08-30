import React from 'react'
import {useSelector} from "react-redux"
import {Grid} from "@material-ui/core"
import {map, filter} from "lodash"

//src
import ToDoItem from "../ToDoItem"
import ToDoAction from "../ToDoAction"

function ToDoBody() {
  const todos = useSelector((state) => state.todos.collection)
  const show = useSelector((state) => state.todos.show)

  const filteredTodos = (params) => {
    switch (params) {
      case 'all':
        return todos
      case 'active':
        return filter(todos, (todo) => !todo.isCompleted)
      case 'completed':
        return filter(todos, (todo) => todo.isCompleted)
      default:
        return todos
    }
  }

  return (
    <Grid item xs={12}>

      <Grid container>
        {map(filteredTodos(show), ((todo) => (
          <ToDoItem
            key={todo.id}
            singleToDo={todo}
            isComplete={todo.isCompleted}
          />
        )))}
        {todos.length !== 0 && <ToDoAction />}
      </Grid>

    </Grid>
  );
}

export default ToDoBody;