import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

interface UserInterface {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  birthday: dayjs.Dayjs;
  nationality: string;
  citizen_id: number[];
  gender: string;
  mobile_phone: string[];
  passport: string;
  salary: string;
}


interface formState {
  users: UserInterface[];
  selectedUser: any;
}

const loadFromStorage = () => {
  try {
    const Data = localStorage.getItem("users");
    if (Data === null) {
      return [];
    }
    return JSON.parse(Data);
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return [];
  }
};

const initialState: formState = {
  users: loadFromStorage(),
  selectedUser: 0,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      const prevData = localStorage.getItem("users") || "[]";
      const users = JSON.parse(prevData);
      users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(users));
    },
    editUser: (state, action) => {
      const { id, ...editedData } = action.payload;
      const userIndex = state.users.findIndex((user: { id: number }) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          ...editedData,
          id: id,
        };
      }
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    deleteUser: (state, action) => {
      const id = parseInt(action.payload);
      state.users = state.users.filter(
        (user: { id: number }) => user.id !== id
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    deleteAll: (state) => {
      state.users = [];
      localStorage.removeItem("users");
    }
  },
});

export const { setSelectedUser, addUser, editUser, deleteUser, deleteAll } =
  formSlice.actions;
export default formSlice.reducer;
