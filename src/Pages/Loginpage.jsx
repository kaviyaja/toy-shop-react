import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

function Loginpage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.email.trim() === "") {
      alert("Email is required.");
      return;
    }

    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid Email Address.");
      return;
    }

    if (form.password.trim() === "") {
      alert("Password is required.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    // Read data from localStorage
    const user = JSON.parse(localStorage.getItem("registerData"));

    if (!user) {
      alert("No registered user found.");
      return;
    }

    if (
      form.email === user.email &&
      form.password === user.password
    ) {
      alert("Login Successful!");
    } else {
      alert("Invalid Email or Password");
    }

    console.log(form);
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={5}
        sx={{
          mt: 5,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        <Typography align="center" sx={{ mb: 3 }}>
          Welcome Back!
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
          />

          <FormControlLabel
            control={
              <Checkbox
                name="remember"
                checked={form.remember}
                onChange={handleChange}
              />
            }
            label="Remember Me"
          />

          <Button
            variant="contained"
            type="submit"
            size="large"
          >
            Login
          </Button>

          <Button variant="text">
            Forgot Password?
          </Button>

          <Typography align="center">
            Don't have an account?{" "}
            <Link to="/register">
              Register Here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Loginpage;