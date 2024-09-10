// routes/registerRoute.js
const express = require('express');
const router = express.Router();

module.exports = (db) => {
    router.post('/', (req, res) => {
        const { username, password, email } = req.body;

        // Basic validation
        if (!username || !password || !email) {
            return res.status(400).json({ success: false, message: 'Missing fields' });
        }

        // Insert data into the database
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(query, [username, email], (err, results) => {
            if (err) {
                console.error('Error inserting data:', err);
                return res.status(500).json({ success: false, message: 'Internal Server Error' });
            }
            res.json({ success: true, message: 'User registered successfully!' });
        });
    });

    return router;
};
