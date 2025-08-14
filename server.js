const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));


// API endpoint to handle form submissions
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

app.post('/api/contact', (req, res) => {
    fs.readFile(MESSAGES_FILE, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ message: 'Error reading messages file.' });
        }

        let messages = [];
        if (!err && data) {
            try {
                const parsedData = JSON.parse(data);
                // Make sure we have an array, in case the file is corrupt in a weird way
                if (Array.isArray(parsedData)) {
                    messages = parsedData;
                }
            } catch (e) {
                console.error("Error parsing messages.json. Starting fresh.", e);
            }
        }

        const newMessage = {
            id: Date.now(),
            date: new Date().toISOString(),
            ...req.body
        };
        messages.push(newMessage);

        fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving message.' });
            }
            res.status(200).json({ message: 'Message received successfully!' });
        });
    });
});

app.get('/api/messages', (req, res) => {
    fs.readFile(MESSAGES_FILE, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ message: 'Error reading messages file.' });
        }

        let messages = [];
        if (!err && data) {
            try {
                const parsedData = JSON.parse(data);
                if (Array.isArray(parsedData)) {
                    messages = parsedData;
                }
            } catch (e) {
                console.error("Error parsing messages.json. Returning empty list.", e);
            }
        }

        res.json(messages.sort((a, b) => b.id - a.id)); // Sort by most recent
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
