import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux"
import {Grid} from "@material-ui/core"
import {map, filter} from "lodash"
import {useDispatch} from "react-redux"

//src
import ToDoItem from "../ToDoItem"
import ToDoAction from "../ToDoAction"
import { db } from "../myFirebase"
import {reload} from "../../redux/slices/Todo";

function ToDoBody() {
  const show = useSelector((state) => state.todos.show)
  const dispatch = useDispatch()

  const [list, setList] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);
  // blank to run only on first launch

  function getTodos() {
    db.collection("TodoList").onSnapshot(function (querySnapshot) {
      setList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          isCompleted: doc.data().isCompleted,
          timestamp: doc.data().timestamp,
        }))
      );
    });
  }

  dispatch(reload(list))

  const filteredTodos = (params) => {
    switch (params) {
      case 'active':
        return filter(list, (todo) => !todo.isCompleted)
      case 'completed':
        return filter(list, (todo) => todo.isCompleted)
      default:
        return list
    }
  }

  return (
    <Grid item xs={12}>

      <Grid container>
        {map(filteredTodos(show), (todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            singleToDo={todo}
            isComplete={todo.isCompleted}
          />
        ))}
        {list.length !== 0 && <ToDoAction />}
      </Grid>

    </Grid>
  );
}

export default ToDoBody;