const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello from the Project 1 back-end!' });
});

router.get('/employees', (req, res) => {
    res.json({ message: 'This will return Project 1 employee data from the DB' });
});

router.get("*", (req, res) => {
    res.status(404).send({ error: "unknown endpoint in Project 1" });
});

module.exports = router;
