import React from 'react';
import useStyles from "./styles";
import ToDoFirst from "../ToDoFirst";
import ToDoPlace from "../ToDoPlace";
import {v4} from 'uuid'
import ToDoFooter from "../ToDoFooter";
import {Box, Container} from "@material-ui/core";


function ToDoBox({todos, setTodos, checkTodo, deleteTodo}) {
    const classes = useStyles()
    const addTodo = (text) => {
        const newTodo = {
            id: v4(),
            title: text,
            isCompleted: false,
        };
        setTodos([...todos, newTodo]);
    }

    return (
        <Container>
            <Box>
            <ToDoFirst addTodo={addTodo} setTodos={setTodos}/>
            {todos.map((todo) => (
                <ToDoPlace key={todo.id}
                           title={todo.title}
                           checkTodo={checkTodo}
                           id={todo.id}
                           isCompleted={todo.isCompleted}
                           deleteTodo={deleteTodo}
                />
            ))}
            <ToDoFooter

            />
        </Box>
        </Container>
    );
};

export default ToDoBox;