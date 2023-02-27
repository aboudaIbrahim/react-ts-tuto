import React from "react";
import { useDeleteTodoMutation } from "../Api/TodoApi";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Grid } from "@mui/material";
import type { Todo } from "./Todos";

export const TodoItem: React.FC<Todo> = ({ id, title, description }) => {
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <Grid
      xs={12}
      sm={6}
      md={4}
      spacing={2}
      sx={{ m: 3, boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)" }}
    >
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ position: "end" }}>
          <Button size="small" color="success">
            Update
          </Button>
          <Button size="small" color="error">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
