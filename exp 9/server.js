const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/productDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Database connection error:", err));

// ✅ Define Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  category: {
    type: String,
    required: true,
    enum: ["Electronics", "Clothing", "Grocery", "Other"],
    default: "Other",
  },
});

// ✅ Create Model
const Product = mongoose.model("Product", productSchema);

//
// ─── CRUD OPERATIONS ────────────────────────────────────────────────
//

// 🟢 CREATE - Add a new product
app.post("/products", async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    await product.save();
    res.status(201).json({ message: "Product added successfully!", product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🔵 READ - Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving products" });
  }
});

// 🟣 UPDATE - Update a product by ID
app.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({
      message: "Product updated successfully!",
      updatedProduct,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🔴 DELETE - Delete a product by ID
app.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// ─── SERVER ─────────────────────────────────────────────────────────
//
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
