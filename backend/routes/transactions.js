// backend/routes/transactionRoute.js (or transactionRoutes.js)
const express = require('express');
const router = express.Router();
const {
  fetchTransactions,
  initializeDatabase,
} = require('../controllers/transactionController');

// Define routes
router.get('/transactions', fetchTransactions);
router.post('/initialize', initializeDatabase);

module.exports = router;
