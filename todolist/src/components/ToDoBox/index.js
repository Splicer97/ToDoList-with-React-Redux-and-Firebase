import React from 'react';
import useStyles from "./styles";
import ToDoFirst from "../ToDoFirst";
import ToDoPlace from "../ToDoPlace";


function ToDoBox({todos}, {setTodos}) {
    const addTodo = (text) => {
        const newTodo = {
            id: 5,
            title: text,
            isCompleted: true,
        };
        setTodos([...todos, newTodo]);
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