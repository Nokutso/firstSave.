import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// 1. CONNECT TO MONGODB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,  // no longer needed with mongoose 6+
      // useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;