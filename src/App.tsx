import React from "react";

import { MainNavigation } from "./Shared/Navigation/MainNavigation";
import { Home } from "./Shared/HomePage/Home";
import { Todos } from "./Todos/Todos";
import { AddTodo } from "./Todos/AddTodo";
import { SignUp } from "./Users/SignUp";
import { Login } from "./Users/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos-list" element={<Todos />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
