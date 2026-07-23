import API from "../api/userApi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  FormControl,      
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

  const handleSubmit = async (e) => {
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
      alert("Please accept the Terms & Conditions.");
      return;
    }

    try {
      const response = await API.post("/register", {
        username: form.username,
        email: form.email,
        mobile: form.phone,
        password: form.password,
        role: "user",
      });

      alert(response.data.message);

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
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error");
      }
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="fname"
            value={form.fname}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lname"
            value={form.lname}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
       <TextField
        label="Date of Birth"
        name="dob"
        type="date"
        value={form.dob}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
        shrink: true,
          }}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Box display="flex" alignItems="center" mt={2}>
            <Checkbox
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              color="primary"
            />
            <Typography variant="body2" ml={1}>
              I accept the Terms & Conditions
            </Typography>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
export default Registerpage;