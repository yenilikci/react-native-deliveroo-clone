import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlices";
import restaurantReducer from "./slices/restaurantSlice";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer
    }
})
