import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type User = {
  name?: string;
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
    // users: builder.query<Data, void>({
    //   query: () => "/",
    //   providesTags: ["User"],
    // }),
    addUser: builder.mutation<void, User>({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    // login: builder.mutation<void, Todo>({
    //   query: ({email , password , ...rest}) => ({
    //     url: "/delete",
    //     method: "POST",
    //   }),
    //   invalidatesTags: ["User"],
    // }),
  }),
});

export const { useAddUserMutation } = userApi;
