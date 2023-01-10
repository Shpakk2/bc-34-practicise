import { createSelector } from "@reduxjs/toolkit";

export const selectorAllTodos = (state) => state.array

export const selectorLoading = (state) => state.isLoading

export const selectorDoneTodos = createSelector([selectorAllTodos], (todos) => {
return todos.filter(todo => todo.status)
})