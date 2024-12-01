const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerId: { type: Number, unique: true, required: true }, // Unique identifier from API-Football
    name: { type: String, required: true },
    firstname: String,
    lastname: String,
    age: Number,
    birth: {
        date: Date,
        place: String,
        country: String,
    },
    nationality: String,
    height: String,
    weight: String,
    position: String,
    team: {
        id: Number,
        name: String,
        logo: String,
    },
    careerStats: {
        appearances: Number,
        goals: Number,
        assists: Number,
        yellowCards: Number,
        redCards: Number,
    },
    seasonStats: [
        {
            season: String,
            team: {
                id: Number,
                name: String,
                logo: String,
            },
            league: {
                id: Number,
                name: String,
                country: String,
                logo: String,
                season: Number,
            },
            appearances: Number,
            goals: Number,
            assists: Number,
            yellowCards: Number,
            redCards: Number,
        },
    ],
    updatedAt: { type: Date, default: Date.now },
});

// Export the model with the correct schema name
module.exports = mongoose.model('Player', PlayerSchema, 'Players');