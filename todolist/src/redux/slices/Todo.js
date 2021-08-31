import {createSlice} from "@reduxjs/toolkit"
import filter from "lodash/filter"

const initialState = {
    collection: [],
    show: "all"
}

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
} = slice.actions;

export default slice.reducer;