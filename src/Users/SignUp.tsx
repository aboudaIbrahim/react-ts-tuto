import React, { ChangeEvent, useState } from "react";
import { useAddUserMutation } from "../Api/UserApi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";

type validateFormInputs = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().required("email is required ").email("email is invalid"),
  password: yup
    .string()
    .min(6, "password must be at least 6 characters")
    .max(12, "password must not exceed 12 characters")
    .required("password is required"),
});

export const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<validateFormInputs>({
    resolver: yupResolver(schema),
  });

  const [addUser, { isSuccess, error }] = useAddUserMutation();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async (data: validateFormInputs) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await addUser(user);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmitHandler)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                label="Name"
                autoComplete="family-name"
                value={name}
                {...register("name")}
                onChange={onChangeNameHandler}
              />
              <div>{errors.name?.message}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                value={email}
                {...register("email")}
                onChange={onChangeEmailHandler}
              />
              <div>{errors.email?.message}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                {...register("password")}
                onChange={onChangePasswordHandler}
              />
              <div>{errors.password?.message}</div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {isSuccess && <Alert severity="success">user created successfully</Alert>}
      {error && <Alert severity="error">something went wrong</Alert>}
    </Container>
  );
};
