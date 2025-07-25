import fs from 'fs';
import path from 'path';
import Product from '../models/Product.js';
import connectDB from '../config/db.js';

const __dirname = path.resolve(); // only needed for ESM

const importProducts = async () => {
  try {
    await connectDB();

    const filePath = path.join(__dirname, 'data/products.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(data);

    await Product.deleteMany(); // clearing existing products
    await Product.insertMany(products);

    console.log('✅ Products imported successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Failed to import products:', err);
    process.exit(1);
  }
};

importProducts();