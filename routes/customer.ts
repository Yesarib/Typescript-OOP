import express from 'express'
import { addCustomer, getCustomers } from '../controllers/customer';

const router = express.Router();

router.get("/", getCustomers);
router.post("/", addCustomer);

export default router;