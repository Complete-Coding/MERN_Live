import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import sellerReducer from "./slices/sellerSlice";
import customerReducer from "./slices/customerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    seller: sellerReducer,
    customer: customerReducer,
  },
});

export default store;