import { createSlice } from "@reduxjs/toolkit";
var deepEqual = require("deep-equal");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
    quantity: 0,
  },
  reducers: {
    reset: (state) => {
      state.products = [];
      state.total = 0;
      state.quantity = 0;
    },
    //decrement product quantity
    decrement: (state, action) => {
      state.products.map((product, i) => {
        const deepEqualResult = deepEqual(
          product.extraIngreadients,
          action.payload.extraIngreadients
        );
        if (
          deepEqualResult &&
          product._id === action.payload.id &&
          product.price === action.payload.price
        ) {
          if (product.quantity > 1) {
            product.quantity -= 1;
            state.total -= product.price;
          }
        }
      });
    },
    increment: (state, action) => {
      state.products.map((product, i) => {
        const deepEqualResult = deepEqual(
          product.extraIngreadients,
          action.payload.extraIngreadients
        );
        if (
          deepEqualResult &&
          product._id === action.payload.id &&
          product.price === action.payload.price
        ) {
          product.quantity += 1;
          state.total += product.price;
        }
      });
    },

    //remove product from cart
    removeProduct: (state, action) => {
      state.products.map((product, i) => {
        const deepEqualResult = deepEqual(
          product.extraIngreadients,
          action.payload.extraIngreadients
        );
        if (
          deepEqualResult &&
          product._id === action.payload.id &&
          product.price === action.payload.price
        ) {
          state.total -= product.price * product.quantity;
          state.quantity -= product.quantity;
          state.products.splice(i, 1);
        }
      });
    },

    addProduct: (state, action) => {
      const product = action.payload;

      const productIndex = state.products.findIndex(
        (item) =>
          item._id === product._id &&
          item.price === product.price &&
          product.total === item.total &&
          item.extraIngreadients.length === product.extraIngreadients.length &&
          item.extraIngreadients.every((v, i) => v === product[i])
      );
      if (productIndex >= 0) {
        state.products[productIndex].quantity += 1;
        state.total += product.price;
      } else {
        state.products.push(product);
        state.total += product.price;
        state.quantity += 1;
      }
    },
  },
});

export const { addProduct, reset, decrement, increment, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
