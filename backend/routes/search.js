import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET /api/search?q=toothpaste
router.get('/', async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ message: 'Missing search query parameter.' });
  }

  try {
    const regex = new RegExp(query, 'i'); // Case-insensitive
    const results = await Product.find({
      $or: [
        { name: regex },
        { store: regex }
      ]
    });

    res.json(results);
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ message: 'Server error while searching.' });
  }
});

export default router;