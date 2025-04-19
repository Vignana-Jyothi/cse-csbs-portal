import { MongoClient, ServerApiVersion } from "mongodb";
import fs from 'fs';

const URI = "mongodb://localhost:27017";
const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

try {
    // Connect the client to MongoDB Server
    await client.connect();

    // Send a ping to confirm successful connection
    await client.db("admin").command({ping: 1});

    console.log("Pinged MongoDB Server. You are successfully connected to MongoDB");
} catch (err) {
    console.error(err);
}

//let db = client.db("employees");
const dbName = 'employees';
var db = null;

try { 
    // Connect to the MongoDB server 
    await client.connect();
    console.log('Connected successfully to server'); 
    db = client.db(dbName); // Read the JSON data file 
    const data = JSON.parse(fs.readFileSync('db/sampledata.json', 'utf8')); 
    
    // Insert the data into the collection 
    const mycollection = db.collection('records'); 

    // Clear the collection
    const deleted = await db.collection('records').deleteMany({}); 
    console.log('Documents deleted:', deleted.deletedCount);
    
    const inserted = await mycollection.insertMany(data);
    console.log(`Inserted ${inserted.insertedCount} documents`); 
} catch (error) { 
    console.error('Error importing data:', error); 
}

export default db;
