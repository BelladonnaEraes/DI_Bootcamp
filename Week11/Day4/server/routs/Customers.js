import express from 'express'

const router = express.Router()

import {getAllCustomers, searchCustomrs, getCustomersData} from '../controllers/Customers.js'

router.get('/customers', getAllCustomers)
router.get('/search', searchCustomrs)
router.get('/customer/:id', getCustomersData)
export default router
