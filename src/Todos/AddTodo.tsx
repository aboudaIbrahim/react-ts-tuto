import React, { ChangeEvent } from "react";
import { useAddTodoMutation } from "../Api/TodoApi";
import { useState } from "react";
import type { Todo } from "./Todos";
import { FormControl, Box, TextField, Button, Grid } from "@mui/material";

export const AddTodo = () => {
  const [addTodo] = useAddTodoMutation();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeDescriptionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todo: Todo = {
      title,
      description,
    };
    await addTodo(todo);
  };
  return (
    <Grid
      component="form"
      xs={12}
      sm={8}
      md={5}
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={onSubmitHandler}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Todo title"
        name="title"
        autoComplete="title"
        autoFocus
        value={title}
        onChange={onChangeTitleHandler}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="description"
        label="description"
        type="text"
        id="description"
        autoComplete="description"
        value={description}
        onChange={onChangeDescriptionHandler}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add Todo
      </Button>
    </Grid>
  );
};
