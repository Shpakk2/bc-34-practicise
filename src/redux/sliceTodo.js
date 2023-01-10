
import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "./operations";

const sliceTodo = createSlice({
    name: "todos",
    initialState: {
        array: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(
            getTodos.pending, (state) => {
            state.isLoading = true;
            state.error = null
            }
        ).addCase(
            getTodos.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.array = [...state.array, ...payload]
            }
        ).addCase(
            getTodos.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
            }
        )

    }
})

export default sliceTodo.reducer 