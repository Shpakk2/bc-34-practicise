import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// const BASE_URL = process.env.BASE_URL
const BASE_URL = "https://63bd511bd660062388a16152.mockapi.io/todos"
console.log(BASE_URL)
export const getTodos = createAsyncThunk(
    "/todos/get", async (_, thunkAPI) => {
        try {
            const response = await axios.get(BASE_URL)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        } 
    }
)