import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  orders: [],
  isLoading: false,
  errorMessages: [],
};

export const fetchCustomerData = createAsyncThunk('customer/fetchCustomerData',
  async () => {
    const token = localStorage.getItem("token");
    const response = await fetch('http://localhost:3000/api/customer/data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const body = await response.json();
    if (response.status === 200) {
      return body;
    } else {
      throw new Error(body.error);
    }
  }
);

export const addToCart = createAsyncThunk('customer/addToCart',
  async (productId) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/customer/cart/${productId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const body = await response.json();
    if (response.status === 200) {
      return body;
    } else {
      throw new Error(body.error);
    }
  }
);

export const removeFromCart = createAsyncThunk('customer/removeFromCart',
  async (productId) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/customer/cart/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const body = await response.json();
    if (response.status === 200) {
      return body;
    } else {
      throw new Error(body.error);
    }
  }
);

export const placeOrder = createAsyncThunk('customer/placeOrder',
  async () => {
    const token = localStorage.getItem("token");
    const response = await fetch('http://localhost:3000/api/customer/order', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const body = await response.json();
    if (response.status === 200) {

      return body;
    } else {
      throw new Error(body.error);
    }
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomerData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCustomerData.fulfilled, (state, action) => {
      state.isLoading = false;
      const {products, cart, orders} = action.payload;
      state.products = products;
      state.cart = cart;
      state.orders = orders;
    });
    builder.addCase(fetchCustomerData.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessages = [action.error.message];
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log(state.orders);
      state.orders.push(action.payload);
      state.cart = [];
    });
  },
});

export default customerSlice.reducer;