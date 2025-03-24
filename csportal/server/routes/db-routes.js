const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello from the back-end!' });
});

router.get('/employees', (req, res) => {
    res.json({ message: 'This will return employee data from the DB' });
});

router.get("*", (req, res) => {
    res.status(404).send({ error: "unknown endpoint" });
});

module.exports = router;
