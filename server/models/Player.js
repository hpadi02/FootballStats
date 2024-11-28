const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: String,
    position: String,
    team: String,
    careerStats: {
        passingYards: Number,
        touchdowns: Number,
        interceptions: Number,
    },
    seasonStats: [
        {
            season: String,
            gamesPlayed: Number,
            passingYards: Number,
            touchdowns: Number,
            interceptions: Number,
        },
    ],
});

module.exports = mongoose.model('Player', PlayerSchema);
