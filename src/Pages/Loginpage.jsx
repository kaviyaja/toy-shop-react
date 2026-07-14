import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      alert("Please enter a valid email address.");
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

    alert("Login Successful!");
  };

  return (
    <div className="container my-5">
      <section className="login-container text-center">
        <h2>Welcome Back!</h2>

        <p>Login to continue shopping for your favourite toys.</p>

        <img
          src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300"
          alt="Toy"
          width="220"
          height="220"
          className="img-fluid mb-4"
        />

        <form
          onSubmit={handleSubmit}
          className="w-50 mx-auto text-start"
        >
          <div className="mb-3">
            <label className="form-label">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="remember"
              className="form-check-input"
              checked={form.remember}
              onChange={handleChange}
              id="remember"
            />

            <label
              className="form-check-label"
              htmlFor="remember"
            >
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>

        <p className="mt-3">
          <button
            type="button"
            className="btn btn-link text-decoration-none p-0"
          >
            Forgot Password?
          </button>
        </p>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register Here
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Loginpage;