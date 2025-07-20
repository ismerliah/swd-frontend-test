import { createSlice } from "@reduxjs/toolkit";

interface formState {
  users: string[]
}

const initialState: formState = {
  users: []
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addUser: (state, action) => {
        state.users.push(action.payload);
        localStorage.setItem("users", JSON.stringify(state.users));
    }
  },
});

export const { addUser } = formSlice.actions;
export default formSlice.reducer;
