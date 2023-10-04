import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customers: [],
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    removeCustomer: (state, action) => {
      // Filter out the customer with the specified ID
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );
    },
    // ... other reducers
  },
});

export const { addCustomer ,removeCustomer} = customersSlice.actions;
export default customersSlice.reducer;