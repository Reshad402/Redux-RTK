import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
