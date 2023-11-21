import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload.extras);
      const allProducts = {
        product: action.payload.fetchedProduct,
        quantity: action.payload.quantity,
        total: action.payload.fetchedProduct.price * action.payload.quantity,
        extra: action.payload.extras,
      };
      state.products.push(allProducts);
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});
export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
