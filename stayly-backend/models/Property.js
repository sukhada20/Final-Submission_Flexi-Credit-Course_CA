const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  bedrooms: Number,
  bathrooms: Number,
  price: { type: Number, required: true },
  pricePeriod: String,
  address: String,
  description: String,
  imageUrl: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Property", propertySchema);
