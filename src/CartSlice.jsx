import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {

        // ✅ Add Item to Cart
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;

            const existingItem = state.items.find(
                (item) => item.name === name
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    name,
                    image,
                    cost,
                    quantity: 1,
                });
            }
        },

        // ✅ Remove Item from Cart
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.name !== action.payload
            );
        },

        // ✅ Update Quantity
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;

            const itemToUpdate = state.items.find(
                (item) => item.name === name
            );

            if (itemToUpdate && quantity > 0) {
                itemToUpdate.quantity = quantity;
            }
        },
    },
});

// ✅ Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// ✅ Export reducer
export default CartSlice.reducer;
