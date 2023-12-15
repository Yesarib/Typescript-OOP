import express from 'express'
import { addOrder, getOrder, getOrders } from '../controllers/order';

const router = express.Router();

router.post('/', addOrder);
router.get('/',getOrders);
router.get('/:orderId', getOrder);

export default router;