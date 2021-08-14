import React from 'react';
import useStyles from "./styles";
import ToDoFirst from "../ToDoFirst";
import ToDoPlace from "../ToDoPlace";


function ToDoBox({todos}) {
    const addTodo = (text) => {
        console.log(text)
    }
    return (
        <>
            <ToDoFirst addTodo={addTodo}/>
            {todos.map((todo) => (
                <ToDoPlace key={todo.id} title={todo.title}/>
            ))}
        </>
    );
};

export default ToDoBox;