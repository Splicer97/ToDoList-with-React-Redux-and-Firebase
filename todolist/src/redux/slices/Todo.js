import {createSlice} from "@reduxjs/toolkit";
import filter from "lodash/filter";

const initialState = {
    collection: [],
    showCollection: [],
    show: "All"
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
            state.collection = filter(state.collection, (todo) => !(todo.id === action.payload))
        },
        checkMyTodo: (state, action) => {
            const index = state.collection.findIndex(todo => todo.id === action.payload)
            state.collection[index].isCompleted = !state.collection[index].isCompleted
        },
        ClearCompleted: (state, action) => {
            state.collection = filter(state.collection, (todo) => !todo.isCompleted)
        },
        Show: (state, action) => {
            if (state.show === "Active") {
                state.showCollection = filter(state.collection, (todo) => !todo.isCompleted)
            } else if (state.show === "Completed") {
                state.showCollection = filter(state.collection, (todo) => todo.isCompleted)
            } else state.showCollection = state.collection
        },
        ChangeItems: (state, action) => {
            state.show = action.payload
        }
    }
})

export const {
    addTodo,
    delTodo,
    checkMyTodo,
    ClearCompleted,
    ChangeItems,
    Show,
} = slice.actions;

export default slice.reducer;