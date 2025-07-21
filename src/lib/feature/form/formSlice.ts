import { createSlice } from "@reduxjs/toolkit";

interface formState {
  users: any[];
  selectedUser: any;
  isDelete: boolean;
}

const loadFromStorage = () => {
  try {
    const serializedData = localStorage.getItem("users");
    if (serializedData === null) {
      return [];
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return [];
  }
};

const initialState: formState = {
  users: loadFromStorage(),
  selectedUser: 0,
  isDelete: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    loadUser: (state, action) => {},
    addUser: (state, action) => {
      state.users.push(action.payload);
      const prevData = localStorage.getItem("users") || "[]";
      const users = JSON.parse(prevData);
      users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(users));
    },
    editUser: (state, action) => {
      const { id, ...editedData } = action.payload;

      const getData = localStorage.getItem("users") || "[]";
      const allUser = JSON.parse(getData);
      const index = allUser.findIndex((user) => user.id === id);

      if (index !== -1) {
        allUser[index] = {
          ...allUser[index],
          ...editedData,
          id: id,
        };
        localStorage.setItem("users", JSON.stringify(allUser));
      }
    },
    setDelete: (state, action) => {
      state.isDelete = action.payload;
    },

    deleteUser: (state, action) => {
      const id = parseInt(action.payload);
      console.log(id);
      const getData = localStorage.getItem("users") || "[]";
      const allUser = JSON.parse(getData);
      const user = allUser.find((user) => user.id === id);
      console.log(user);
      if (user) {
        const updatedArray = allUser.filter((item) => item.id != id);
        localStorage.setItem("users", JSON.stringify(updatedArray));
      }
    },
  },
});

export const { setSelectedUser, addUser, editUser, deleteUser, setDelete } =
  formSlice.actions;
export default formSlice.reducer;
