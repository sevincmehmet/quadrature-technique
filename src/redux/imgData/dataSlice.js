import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "src",
  initialState: {
    value: "",
  },
  reducers: {
    addData: (state, actions) => {
      state.value = actions.payload;
    },
    deleteData: (state, actions) => {
      state.value = "";
    },
  },
});

export const { addData, deleteData } = dataSlice.actions;

export default dataSlice.reducer;
