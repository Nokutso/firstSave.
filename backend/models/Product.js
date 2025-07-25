// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  store: String,
  link: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;
