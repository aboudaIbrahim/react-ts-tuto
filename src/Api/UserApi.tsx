import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type User = {
  name: string;
  email: string;
  password: string;
};

interface Data {
  success: boolean;
  message: string;
  data: User[];
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:80/api/users" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // todos: builder.query<Data, void>({
    //   query: () => "/list",
    //   providesTags: ["Todo"],
    // }),
    addUser: builder.mutation<void, User>({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    // deleteTodo: builder.mutation<void, Todo>({
    //   query: (id) => ({
    //     url: "/delete",
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Todo"],
    // }),
  }),
});

export const { useAddUserMutation } = userApi;
