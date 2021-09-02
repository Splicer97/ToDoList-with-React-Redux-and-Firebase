import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux"
import {Grid} from "@material-ui/core"
import {map, filter} from "lodash"
import {useDispatch} from "react-redux"
import firebase from "firebase"

//src
import ToDoItem from "../ToDoItem"
import ToDoAction from "../ToDoAction"
import { db } from "../myFirebase"
import {reload} from "../../redux/slices/Todo";

function ToDoBody() {
  const todos = useSelector((state) => state.todos.collection)
  const show = useSelector((state) => state.todos.show)
  const dispatch = useDispatch()

  const [list, setList] = useState([]);

  useEffect(() => {
    getTodos();
  }, []); // blank to run only on first launch

  function getTodos() {
    db.collection("TodoList").onSnapshot(function (querySnapshot) {
      setList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          isCompleted: doc.data().isCompleted,
        }))
      );
    });
  }

  dispatch(reload(list))

  // const filteredTodos = (params) => {
  //   switch (params) {
  //     case 'active':
  //       return filter(todos, (todo) => !todo.isCompleted)
  //     case 'completed':
  //       return filter(todos, (todo) => todo.isCompleted)
  //     default:
  //       return todos
  //   }
  // }

  // const firebaseFiltered = (params) => {
  //   switch (params) {
  //     case 'active':
  //       return filter(db.collection("TodoList"), (todo) => !todo.isCompleted)
  //     case 'completed':
  //       return filter(db.collection("TodoList"), (todo) => todo.isCompleted)
  //     default:
  //       return db.collection("TodoList")
  //   }
  // }

  return (
    <Grid item xs={12}>

      <Grid container>
        {/*{map(firebaseFiltered(show), ((todo) => (*/}
        {map(list, (todo) => (
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