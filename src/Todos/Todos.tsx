import React from "react";
import { Box, Grid } from "@mui/material";
import { TodoItem } from "./TodoItem";
import { useTodosQuery } from "../Api/TodoApi"; 

export type Todo = {
  id?: number;
  title: string;
  description: string;
};


export const Todos = () => {
  const { data, error, isFetching, isLoading, isSuccess , refetch } = useTodosQuery();
  return (
    <Box sx={{ flexGrow: 1, mt: 3, padding: 8 }}>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      <Grid container spacing={2}>
        {data?.data.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            title={todo.title}
          />
        ))}
      </Grid>
    </Box>
  );
};
