import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {

        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },

        removeFromBasket: (state) => {
            state.items -= -1;
        }

    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer;