import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./features/jobsSlice";

export const store = configureStore({
    reducer: {
        jobs: jobsSlice,
    }
});