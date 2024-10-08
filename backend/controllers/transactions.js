const axios = require('axios');
const Transaction = require('../models/Transaction');

const initializeDatabase = async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const transactions = response.data;
        await Transaction.insertMany(transactions);
        res.status(200).json({ message: 'Database initialized with seed data' });
    } catch (error) {
        res.status(500).json({ message: 'Error initializing database', error });
    }
};

const getTransactions = async (req, res) => {
    const { month, search, page = 1, perPage = 10 } = req.query;
    const query = {
        dateOfSale: { $regex: new RegExp(month, 'i') },
        $or: [
            { title: { $regex: new RegExp(search, 'i') } },
            { description: { $regex: new RegExp(search, 'i') } },
            { price: { $regex: new RegExp(search, 'i') } }
        ]
    };
    const transactions = await Transaction.find(query)
        .skip((page - 1) * perPage)
        .limit(Number(perPage));
    res.json({ transactions });
};

module.exports = { getTransactions, initializeDatabase };
