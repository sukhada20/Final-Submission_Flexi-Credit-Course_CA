const express = require("express");
const Property = require("../models/Property");
const router = express.Router();

// Add new property
router.post("/", async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.json({ message: "Property added successfully", property });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get one property by ID
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ error: "Property not found" });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
