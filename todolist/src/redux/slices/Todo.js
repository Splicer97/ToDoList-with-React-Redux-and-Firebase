import { createSlice } from "@reduxjs/toolkit";
import {filter} from "lodash";

const initialState = {
    todos: [],
    isCompleted: false,
};

const slice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        reset: () => initialState,
        addTodo: (state, action) => {
            state.isCompleted = true
        },
        deleteTodo: (state, action) => {
            state.todos = filter(state.todos, {})
            state.isCompleted = false
        },
         // setTodo: (state, action) => {
         // },
    },
});

export const {addTodo, deleteTodo, setTodo} = slice.actions;

export default slice.reducer;