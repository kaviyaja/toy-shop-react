import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/userApi";

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
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Login User
  const handleSubmit = async (e) => {
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

    try {
      const response = await API.post("/login", {
        email: form.email,
        password: form.password,
      });

      alert(response.data.message);

      // Store logged in user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Redirect according to role
      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (error) {

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error");
      }

    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1600)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 5,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={12}
          sx={{
            p: 5,
            borderRadius: 4,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 40px rgba(0,0,0,.25)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              color: "#ff6600",
              fontWeight: "bold",
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            align="center"
            sx={{
              mb: 4,
              color: "#666",
            }}
          >
            Login to your Kaviya's Toy Shop account
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
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    color="warning"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                  />
                }
                label="Remember Me"
              />

              <Button
                variant="text"
                sx={{
                  color: "#ff6600",
                  textTransform: "none",
                }}
              >
                Forgot Password?
              </Button>
            </Box>

            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: 18,
                borderRadius: 2,
                backgroundColor: "#ff6600",
                "&:hover": {
                  backgroundColor: "#e65100",
                },
              }}
            >
              Login
            </Button>

            <Typography
              align="center"
              sx={{
                mt: 3,
              }}
            >
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{
                  textDecoration: "none",
                  color: "#ff6600",
                  fontWeight: "bold",
                }}
              >
                Register Here
              </Link>
            </Typography>

          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Loginpage;