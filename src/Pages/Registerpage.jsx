import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from "@mui/material";

function Registerpage() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    terms: false,
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
    const phonePattern = /^[0-9]{10}$/;

    if (form.fname.trim() === "") {
      alert("First Name is required.");
      return;
    }

    if (form.lname.trim() === "") {
      alert("Last Name is required.");
      return;
    }

    if (!emailPattern.test(form.email)) {
      alert("Enter a valid Email Address.");
      return;
    }

    if (!phonePattern.test(form.phone)) {
      alert("Phone Number must contain exactly 10 digits.");
      return;
    }

    if (form.username.length < 4) {
      alert("Username must be at least 4 characters.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (form.dob === "") {
      alert("Please select your Date of Birth.");
      return;
    }

    if (form.gender === "") {
      alert("Please select your Gender.");
      return;
    }

    if (form.address.trim() === "") {
      alert("Address cannot be empty.");
      return;
    }

    if (!form.terms) {
      alert("Please accept the Terms and Conditions.");
      return;
    }

    // Store in localStorage
    localStorage.setItem(
      "registerData",
      JSON.stringify(form)
    );

    alert("Registration Successful!");

    console.log(form);

    // Clear Form
    setForm({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      address: "",
      terms: false,
    });
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
          Register
        </Typography>

        <Typography align="center" sx={{ mb: 3 }}>
          Create Your Account
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
            label="First Name"
            name="fname"
            value={form.fname}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Last Name"
            name="lname"
            value={form.lname}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Username"
            name="username"
            value={form.username}
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

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={form.dob}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            fullWidth
          />

          <Box>
            <FormLabel>Gender</FormLabel>

            <RadioGroup
              row
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Male"
                control={<Radio />}
                label="Male"
              />

              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />

              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </Box>

          <TextField
            label="Address"
            name="address"
            multiline
            rows={4}
            value={form.address}
            onChange={handleChange}
            fullWidth
          />

          <FormControlLabel
            control={
              <Checkbox
                name="terms"
                checked={form.terms}
                onChange={handleChange}
              />
            }
            label="I agree to the Terms & Conditions"
          />

          <Button
            variant="contained"
            color="success"
            type="submit"
            size="large"
          >
            Register
          </Button>

          <Typography align="center">
            Already have an account?{" "}
            <Link to="/login">
              Login Here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Registerpage;