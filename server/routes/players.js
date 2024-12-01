const express = require('express');
const Player = require('../models/Player');
const router = express.Router();


// Create a player
router.post('/', async (req, res) => {
    try {
        const player = new Player(req.body);
        await player.save();
        res.status(201).json(player); // Send HTTP 201 Created status
    } catch (err) {
        console.error('Error creating player:', err);
        res.status(500).json({ message: 'Error creating player', error: err.message });
    }
});

// Get all players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (err) {
        console.error('Error fetching players:', err);
        res.status(500).json({ message: 'Error fetching players', error: err.message });
    }
});

// Update a player
router.put('/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!player) return res.status(404).json({ message: 'Player not found' });
        res.status(200).json(player);
    } catch (err) {
        console.error('Error updating player:', err);
        res.status(500).json({ message: 'Error updating player', error: err.message });
    }
});

// Delete a player
router.delete('/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) return res.status(404).json({ message: 'Player not found' });
        res.status(200).json({ message: 'Player deleted' });
    } catch (err) {
        console.error('Error deleting player:', err);
        res.status(500).json({ message: 'Error deleting player', error: err.message });
    }
});

// Route to fetch player by first and last name
router.get('/search', async (req, res) => {
    const { firstname, lastname } = req.query;

    try {
        const player = await Player.findOne({ 
            firstname: { $regex: new RegExp(`^${firstname}$`, 'i') }, 
            lastname: { $regex: new RegExp(`^${lastname}$`, 'i') } 
        });

        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }

        res.json(player);
    } catch (err) {
        console.error('Error fetching player data:', err);
        res.status(500).json({ message: 'Error fetching player data' });
    }
});

module.exports = router;