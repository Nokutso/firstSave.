import express from 'express';
const router = express.Router();
import { createProduct, getAllProducts, getProductById } from '../controllers/productController.js';

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);

export default router;