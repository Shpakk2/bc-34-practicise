import { configureStore } from "@reduxjs/toolkit";
import sliceTodoReducer from "./sliceTodo";

export const store = configureStore({
    reducer: sliceTodoReducer
})