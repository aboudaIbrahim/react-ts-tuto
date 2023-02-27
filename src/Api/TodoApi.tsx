import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  id?: number;
  title: string;
  description: string;
}
interface Data {
  success: boolean;
  message: string;
  data: Todo[];
}

export const todoApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:80/api/todos" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    todos: builder.query<Data, void>({
      query: () => "/list",
      providesTags: ["Todo"],
    }),
    addTodo: builder.mutation<void, Todo>({
      query: (todo) => ({
        url: "/create",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation<void, Todo>({
      query: (id) => ({
        url: "/delete",
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const { useTodosQuery, useAddTodoMutation, useDeleteTodoMutation } =
  todoApi;
