import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";

const dbconnectionMap = new Map();
dbconnectionMap.set(process.env.MONGO_URI_PROJECT1);
dbconnectionMap.set(process.env.MONGO_URI_PROJECT2);

async function connectDB(mongoURI) {
    console.log('mongoURI: ' + mongoURI);
    if (dbconnectionMap.get(mongoURI)) {
      console.log("Reusing the existing connection for: " + mongoURI);
      return dbconnectionMap.get(mongoURI);
    }

    let dbInstance = null;

    try {
      dbInstance = await mongoose.createConnection(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).asPromise();
      
      dbconnectionMap.set(mongoURI, dbInstance);
      console.log('MongoDB connected successfully');
      console.log('Created new connection for: ' + mongoURI); 

      return dbInstance;
    } catch (error) {
      console.error('Error connecting to MongoDB for URI:' + mongoURI, error);
      process.exit(1); // Exit process on failure
    }
};

export default connectDB;