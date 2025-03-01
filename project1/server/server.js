import express from "express";
import cors from "cors";
import records from "./routes/record.js"

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(`/record`, records);

app.get("/", async(req, res) => {
    res.send('{ "status" : "Running" }');
});

// start the Express Server
app.listen(PORT, () => {
    console.log(`MERN Project 1 Service listening on Port ${PORT}`);
});