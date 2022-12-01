import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addCart(state, action) {
      //add an item
      const newItem = action.payload;
      //check if the item exist.
      //find() checks/compare if existingItem === newItem
      const existingItem = state.items.find((item) => item.id === newItem.id);
      //set condition with if else
      //if falsy (not part of the array yet)
      state.totalQuantity++;
      //state.totalAmnt = existingItem.price * existingItem.quantity;
      if (!existingItem) {
        //add to the cart: (object)
        state.items.push({
          id: newItem.id,
          rate: newItem.rate,
          img: newItem.img,
          name: newItem.name,
          dsc: newItem.dsc,
          price: newItem.price,
          quantity: 1,
          totPrice: newItem.price,
        });
      } else {
        //If item does exist
        //Identify which will be change for a truthy value
        existingItem.quantity++;
        existingItem.totPrice = existingItem.totPrice + newItem.price;
      }
    },
    removeCart(state, action) {
      //check before delete
      const id = action.payload;
      //find() checks/compare if existingItem === newItem
      const existingItem = state.items.find((item) => item.id === id);
      //if condition is thruthy
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totPrice = existingItem.totPrice - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
