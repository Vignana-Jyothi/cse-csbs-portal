require("dotenv").config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbRoutes = require("./routes/db-routes");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.json()); // Parse incoming JSON payloads
app.use(cors()); // Enable CORS to allow requests from any domain

app.use('/api', dbRoutes);

app.use(express.static("build"));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
