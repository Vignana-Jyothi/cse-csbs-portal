import connectDB from "../coredb/dbconnection.js";

import express from "express";
const router = express.Router();

let conn = await connectDB(process.env.MONGO_URI_PROJECT1);

router.get('/', (req, res) => {
    res.json({ message: 'Hello from the Project 1 back-end!' });
});

router.get('/students', async (req, res) => {
    let collection = await conn.db.collection("students");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.get("*", (req, res) => {
    res.status(404).send({ error: "unknown endpoint in Project 1" });
});

export default router;
