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
        reload: (state, action) => {
            state.collection = action.payload
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
    ClearCompleted,
    ChangeItems,
  reload,
} = slice.actions;

export default slice.reducer;