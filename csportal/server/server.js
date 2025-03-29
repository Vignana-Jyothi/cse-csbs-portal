require("dotenv").config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const project1Router = require("./routes/project1Router");
const project2Router = require("./routes/project2Router");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.json()); // Parse incoming JSON payloads
app.use(cors()); // Enable CORS to allow requests from any domain

app.use('/project1/api', project1Router);
app.use('/project2/api', project2Router);

app.use(express.static("build"));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
