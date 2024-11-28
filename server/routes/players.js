const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

// Create a player
router.post('/', async (req, res) => {
    try {
        const player = new Player(req.body);
        await player.save();
        res.json(player);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a player
router.put('/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(player);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a player
router.delete('/:id', async (req, res) => {
    try {
        await Player.findByIdAndDelete(req.params.id);
        res.json({ message: 'Player deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
