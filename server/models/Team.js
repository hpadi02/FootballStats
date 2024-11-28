const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: String,
    location: String,
    stadium: String,
    roster: [String], // Array of player IDs
    coachingStaff: {
        headCoach: String,
        offensiveCoordinator: String,
        defensiveCoordinator: String,
    },
    seasonPerformance: [
        {
            season: String,
            wins: Number,
            losses: Number,
            playoffAppearance: Boolean,
        },
    ],
});

module.exports = mongoose.model('Team', TeamSchema);
