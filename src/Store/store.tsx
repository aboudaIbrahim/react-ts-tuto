import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "../Api/TodoApi";
import { userApi } from "../Api/UserApi";
export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware, userApi.middleware),
});
