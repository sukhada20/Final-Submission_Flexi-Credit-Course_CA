import React, { useState } from "react";

const Signin = () => {
  const [tab, setTab] = useState("signin");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Sign up user
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("Processing...");
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) setMessage("✅ Account created successfully!");
      else setMessage(`❌ ${data.error}`);
    } catch (err) {
      setMessage("⚠️ Failed to connect to server.");
    }
  };

  // Sign in user
  const handleSignin = async (e) => {
    e.preventDefault();
    setMessage("Processing...");
    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMessage("✅ Login successful!");
      } else setMessage(`❌ ${data.error}`);
    } catch (err) {
      setMessage("⚠️ Failed to connect to server.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-header">
          <h2>
            Welcome to <span className="brand-text">STAYLY</span>
          </h2>
          <p>Sign in to your account or create a new one</p>
        </div>

        <div className="signin-tabs">
          <button
            className={`signin-tab ${tab === "signin" ? "active" : ""}`}
            onClick={() => setTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`signin-tab ${tab === "signup" ? "active" : ""}`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {tab === "signin" ? (
          <form className="signin-form" onSubmit={handleSignin}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
            </div>
            <button className="btn-primary signin-btn">Sign In</button>
          </form>
        ) : (
          <form className="signin-form" onSubmit={handleSignup}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
            </div>
            <button className="btn-primary signin-btn">Sign Up</button>
          </form>
        )}

        {message && <p style={{ marginTop: "15px", color: "#555" }}>{message}</p>}
      </div>
    </div>
  );
};

export default Signin;
