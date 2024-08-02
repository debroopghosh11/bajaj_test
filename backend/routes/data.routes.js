const express = require('express');
const router = express.Router();

router.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort().pop()] : [];
    
    res.json({
        is_success: true,
        user_id: "Debroop-Ghosh_11092002",
        email: "dd3538@srmist.edu.in",
        roll_number: "RA2111030010089",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});

router.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

module.exports = router;