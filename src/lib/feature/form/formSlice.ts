import { createSlice } from "@reduxjs/toolkit";

interface formState {
  users: string[];
}

const initialState: formState = {
  users: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
});

export const {} = formSlice.actions;
export default formSlice.reducer;
