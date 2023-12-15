import express from 'express'
import { addProduct, deleteProduct, getProduct, getProducts } from '../controllers/product';

const router = express.Router();

router.post("/", addProduct);
router.delete("/", deleteProduct);
router.get("/:productId", getProduct);
router.get("/",getProducts);

export default router;