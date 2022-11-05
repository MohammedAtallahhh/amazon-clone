import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const newItem = action.payload;
      const itemExists = state.items.find((item) => item.id === newItem.id);

      if (!itemExists) {
        state.items = [...state.items, { ...newItem, quantity: 1 }];
      } else {
        itemExists.quantity++;
      }
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex((p) => p.id === id);

      if (quantity < 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity = quantity;
      }
    },
  },
});

export const { addToBasket, removeFromBasket, changeQuantity } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
