const express = require('express');
const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const app = express();
const port = 2999;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/coredb')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error:', err));

// Dynamic schema creation function
function createModelFromCSV(collectionName, headers) {
    const schemaDefinition = {};
    headers.forEach(header => {
        const normalizedHeader = header.replace(/\s+/g, '_'); // Normalize field names
        schemaDefinition[normalizedHeader] = String;
    });

    return mongoose.model(collectionName, new mongoose.Schema(schemaDefinition));
}

// CSV import function
async function importCSVToMongoDB(filePath, collectionName) {
    return new Promise((resolve, reject) => {
        const results = [];
        let headers = [];
        
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('headers', (csvHeaders) => {
                headers = csvHeaders.map(header => header.replace(/\s+/g, '_')); // Normalize headers
            })
            .on('data', (data) => {
                let normalizedData = {};
                headers.forEach(header => {
                    normalizedData[header] = data[header.replace(/_/g, ' ')]; // Map CSV data
                });
                results.push(normalizedData);
            })
            .on('end', async () => {
                try {
                    await mongoose.connection.db.dropCollection(collectionName).catch(() => {});
                    const Model = createModelFromCSV(collectionName, headers);
                    await Model.insertMany(results);
                    console.log(`Successfully imported ${results.length} records to ${collectionName}`);
                    resolve();
                } catch (err) {
                    reject(err);
                }
            })
            .on('error', reject);
    });
}

// Middleware to parse JSON
app.use(express.json());

// Faculty endpoint
app.get('/coredb/faculty/:employeecode', async (req, res) => {
    try {
        const Faculty = mongoose.model('faculty');
        const faculty = await Faculty.findOne({ EmployeeCode: req.params.employeecode });
        
        if (!faculty) {
            return res.status(404).json({ error: 'Faculty not found' });
        }
        
        res.json(faculty);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Student endpoint
app.get('/coredb/student/:studentid', async (req, res) => {
    try {
        const Student = mongoose.model('student');
        const student = await Student.findOne({ StudentCode: req.params.studentid });
        
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to trigger CSV import
app.post('/coredb/import', async (req, res) => {
    try {
        const { filePath, collectionName } = req.body;
        if (!filePath || !collectionName) {
            return res.status(400).json({ error: 'filePath and collectionName are required' });
        }
        await importCSVToMongoDB(filePath, collectionName);
        res.json({ message: `CSV data imported to ${collectionName} collection` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to import CSV' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
