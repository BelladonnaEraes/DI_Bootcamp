import express from 'express';
const router = express.Router();

import {getAllCustomers,
        searchCustomer,
        getCustometData,
        updateCustomer} from '../controllers/Customers.js';

router.get('/customers', getAllCustomers);
router.get('/search', searchCustomer);
router.get('/customer/:id', getCustometData);
router.put('/update/:id', updateCustomer)

export default router;
