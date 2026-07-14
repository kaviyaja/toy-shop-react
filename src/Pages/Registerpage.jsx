import React, { useState } from "react";

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

    alert("Registration Successful!");
  };

  return (
    <div className="container my-5">

      <section className="register-container text-center">

        <h2>Create Your Account</h2>

        <p>Join our toy family and start shopping today!</p>

        <img
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=300"
          width="220"
          height="220"
          alt="Toy"
          className="img-fluid mb-4"
        />

        <form onSubmit={handleSubmit} className="w-50 mx-auto text-start">

          <input className="form-control mb-3" name="fname" placeholder="First Name" value={form.fname} onChange={handleChange} />

          <input className="form-control mb-3" name="lname" placeholder="Last Name" value={form.lname} onChange={handleChange} />

          <input className="form-control mb-3" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />

          <input className="form-control mb-3" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />

          <input className="form-control mb-3" name="username" placeholder="Username" value={form.username} onChange={handleChange} />

          <input className="form-control mb-3" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />

          <input className="form-control mb-3" type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />

          <input className="form-control mb-3" type="date" name="dob" value={form.dob} onChange={handleChange} />

          <div className="mb-3">

            <label className="me-3">
              <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            </label>

            <label className="me-3">
              <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            </label>

            <label>
              <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
            </label>

          </div>

          <textarea
            className="form-control mb-3"
            rows="5"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
          ></textarea>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="terms"
              className="form-check-input"
              checked={form.terms}
              onChange={handleChange}
            />

            <label className="form-check-label">
              I agree to the Terms and Conditions
            </label>
          </div>

          <button className="btn btn-success w-100">
            Register
          </button>

        </form>

        <p className="mt-3">
          Already have an account? <a href="/login">Login Here</a>
        </p>

      </section>

    </div>
  );
}

export default Registerpage;