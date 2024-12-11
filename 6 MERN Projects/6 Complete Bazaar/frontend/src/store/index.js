import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import sellerReducer from "./slices/sellerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    seller: sellerReducer,
  },
});

export default store;