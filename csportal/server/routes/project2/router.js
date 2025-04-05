import connectDB from "../coredb/dbconnection.js";

import express from "express";
const router = express.Router();

let conn = await connectDB(process.env.MONGO_URI_PROJECT2);

router.get('/', (req, res) => {
    res.json({ message: 'Hello from the Project 2 back-end!' });
});

router.get('/faculty', async (req, res) => {
    let collection = await conn.db.collection("faculty");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.get("*", (req, res) => {
    res.status(404).send({ error: "unknown endpoint in Project 2" });
});

export default router;
