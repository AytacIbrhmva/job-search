import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    category: [],
    search: '',
    loading: false,
    error: "",
}

export const fetchJobs = createAsyncThunk('fetchJobs', async () => {
    const response = await axios.get('https://jobsearch-json-server-deploy.onrender.com/jobList');
    return response.data;
})

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category.push(action.payload)
        },
        removeCategory: (state, action) => {
            state.category.splice(action.payload, 1)
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },  
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchJobs.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching todos data";
        });
    },
})

export default jobsSlice.reducer;
export const {setCategory, removeCategory, setSearch} = jobsSlice.actions;