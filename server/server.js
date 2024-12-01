const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // Import the connectDB function

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); // Use the imported connection function

// Routes
const playersRouter = require('./routes/players');
app.use('/api/players', playersRouter); // Ensure this mounts the route

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));