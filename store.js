import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlices";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    }
})