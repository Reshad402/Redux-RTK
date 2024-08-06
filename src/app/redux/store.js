import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";
import todoReducer from "./slice";
export const store = configureStore({
  reducer: {
    usersData: userReducer,
    todosData: todoReducer,
  },
});
