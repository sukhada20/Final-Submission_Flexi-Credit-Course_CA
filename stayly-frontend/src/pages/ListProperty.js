import React, { useState } from "react";

const ListProperty = () => {
  const [form, setForm] = useState({
    title: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    pricePeriod: "/month",
    address: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  // Handle field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit property listing
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing...");
    try {
      const res = await fetch("http://localhost:5000/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Property listed successfully!");
        setForm({
          title: "",
          type: "",
          bedrooms: "",
          bathrooms: "",
          price: "",
          pricePeriod: "/month",
          address: "",
          description: "",
        });
      } else setMessage(`❌ ${data.error}`);
    } catch (err) {
      setMessage("⚠️ Failed to connect to server.");
    }
  };

  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="form-container">
        <h1 className="page-title">List Your Property</h1>
        <p className="page-subtitle">
          Share your space with travelers and long-term renters
        </p>

        <form className="property-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3 className="form-section-title">Property Details</h3>

            <div className="form-row">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Cozy Downtown Apartment"
                  required
                />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select name="type" value={form.type} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="studio">Studio</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Bedrooms</label>
                <input
                  type="number"
                  name="bedrooms"
                  value={form.bedrooms}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Bathrooms</label>
                <input
                  type="number"
                  name="bathrooms"
                  value={form.bathrooms}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                rows="4"
                value={form.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="reset" className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              List Property
            </button>
          </div>
        </form>

        {message && <p style={{ marginTop: "15px", color: "#555" }}>{message}</p>}
      </div>
    </div>
  );
};

export default ListProperty;
