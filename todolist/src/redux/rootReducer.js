import { combineReducers } from '@reduxjs/toolkit'
import Todo from './slices/Todo'

export default combineReducers({
    todos: Todo
})