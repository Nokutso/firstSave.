import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import searchRoutes from './routes/search.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
//app.use(cors());
// ✅ Recommended CORS setup
app.use(cors({
  origin: 'http://localhost:5174',  // your React app's address
  credentials: true                 // allow cookies or auth headers if needed
}));
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/search', searchRoutes);


const PORT = process.env.PORT || 9077;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));