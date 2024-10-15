const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/cottonseed-cake', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define Product Schema with imageUrl
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  imageUrl: String // Add imageUrl field
});

const Product = mongoose.model('Product', productSchema);

// API route for products
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// API route for individual product details
app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Sample data seeding (uncomment to seed data once)
const seedProducts = async () => {
  await Product.create([
    {
      name: 'Cottonseed Cake - Type A',
      price: 200,
      quantity: 100,
      imageUrl: 'https://via.placeholder.com/250x200?text=Type+A' // Dummy image URL
    },
    {
      name: 'Cottonseed Cake - Type B',
      price: 180,
      quantity: 150,
      imageUrl: 'https://via.placeholder.com/250x200?text=Type+B' // Dummy image URL
    },
    {
      name: 'Cottonseed Cake - Type C',
      price: 220,
      quantity: 80,
      imageUrl: 'https://via.placeholder.com/250x200?text=Type+C' // Dummy image URL
    }
  ]);
};

// Uncomment to seed the database when starting the server for the first time
// seedProducts();

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
