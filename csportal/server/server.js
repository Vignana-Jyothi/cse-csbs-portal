import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./routes/project1/router.js";
import project2Router from "./routes/project2/router.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.json()); // Parse incoming JSON payloads
app.use(cors()); // Enable CORS to allow requests from any domain

app.use('/project1/api', router);
app.use('/project2/api', project2Router);

app.use(express.static("build"));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
