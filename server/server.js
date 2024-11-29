const express = require('express'); // Import express
const cors = require('cors');      // Import cors

const app = express();             // Initialize the express application

// Middleware
app.use(cors());                   // Use CORS to allow requests from other origins
app.use(express.json());           // Parse JSON payloads

// Example Route
app.get('/api/players', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe', position: 'Quarterback', team: 'Team A' },
        { id: 2, name: 'Jane Smith', position: 'Wide Receiver', team: 'Team B' },
    ]);
});

// Start the Server
const PORT = 5001;                 // Specify the port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
