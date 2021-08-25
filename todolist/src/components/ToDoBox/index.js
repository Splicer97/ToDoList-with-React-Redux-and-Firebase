import React from 'react';
import useStyles from "./styles";
import ToDoInput from "../ToDoInput";
import ToDoItem from "../ToDoItem";
import ToDoAction from "../ToDoAction";
import {Box, Container} from "@material-ui/core";
import {useSelector} from "react-redux";


function ToDoBox({ checkTodo}) {
    const Todo = useSelector((state) => state.todos.collection);
    const classes = useStyles()

    return (
        <Container>
            <Box>
                <ToDoInput/>
                {Todo.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        title={todo.title}
                        id={todo.id}
                    />
                ))}
                <ToDoAction

                />
            </Box>
        </Container>
    );
};

export default ToDoBox;