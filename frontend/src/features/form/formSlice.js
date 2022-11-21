import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: false,
  reducers: {
    formView: (state, action) => {
      return !state;
    },
  },
});

// this is for dispatch
export const { formView } = formSlice.actions;

// this is for configureStore
export default formSlice.reducer;
