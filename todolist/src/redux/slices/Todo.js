import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    collection: [],
};

const slice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        reset: () => initialState,
        addTodo: (state, action) => {
            state.collection = [...state.collection, action.payload]
        },
        delTodo: (state, action) => {
            state.collection = state.collection.filter((todo) => !(todo.id === action.payload))
        },
        checkMyTodo: (state, action) => {
            const index = state.collection.findIndex(todo => todo.id === action.payload)
            state.collection[index].isCompleted = !state.collection[index].isCompleted
        },
    }
})

export const {
    addTodo,
    delTodo,
    checkMyTodo
} = slice.actions;

export default slice.reducer;