import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux"
import firebase from "firebase"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Grid,
  TextField,
  InputAdornment,
  ListItem,
  Divider,
  List
} from "@material-ui/core"
import {v4} from "uuid"
import {trim} from "lodash"

//src
import { addTodo, reload } from "../../redux/slices/Todo"
import useStyles from "./styles"
import { db } from "../myFirebase"

function ToDoInput() {
  const classes = useStyles()
   const dispatch = useDispatch()

  const [text, setText] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    // const newTodo = {
    //   id: v4(),
    //   title: text,
    //   isCompleted: false,
    // }

    const todoText = trim(text)
    
    if (todoText.length > 0) {
      // dispatch(addTodo(newTodo))
      db.collection("TodoList").add({
        title: text,
        isCompleted: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

    }

    dispatch(reload(db.collection("TodoList")))
    addTodo(text);

    // db.collection.push(newTodo);
    setText("")
  }

  return (
    <List className={classes.list}>
      <ListItem
        className={classes.list}
        alignItems="flex-start"
      >
      <Grid
        container
        justifyContent="center"
        alignItems='center'
      >
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField
              classes={{root: classes.box}}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment
                    position="start">
                    <ExpandMoreIcon classes={{root: classes.root}}/>
                  </InputAdornment>
                ),
              }}
              value={text}
              fullWidth
              onChange={(e) => setText(e.target.value)}
              placeholder="What needs to be done?"
            />
          </form>
        </Grid>

      </Grid>
      </ListItem>
      <Divider />
    </List>
  );
}

export default ToDoInput;