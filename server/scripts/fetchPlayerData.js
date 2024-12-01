require('dotenv').config({ path: '/Users/andrewgonzalez/Desktop/FootballStats/server/.env' });
const axios = require('axios');
const mongoose = require('mongoose');
const Player = require('../models/Player.js');
const connectDB = require('../config/db');

const fetchPlayerData = async () => {
    try {
        // Connect to MongoDB
        await connectDB();
        console.log('Connected to MongoDB');

        // API Request Setup
        const apiKey = process.env.API_FOOTBALL_KEY;
        if (!apiKey) {
            throw new Error('API key is missing. Check your .env file.');
        }

        console.log('Using API Key:', apiKey);

        const options = {
            method: 'GET',
            url: 'https://v3.football.api-sports.io/players',
            params: { league: '61', season: '2022' },
            headers: {
                'x-apisports-key': apiKey,
            },
        };

        const response = await axios.request(options);

        // Debugging API Response
        console.log('API Response Status:', response.status);
        console.log('API Response Data:', JSON.stringify(response.data, null, 2));

        const players = response.data.response;

        // Check if players data exists
        if (players && players.length) {
            const playerData = players.map(player => {
                const stats = player.statistics[0] || {}; // Handle missing statistics gracefully
                return {
                    playerId: player.player.id,
                    name: player.player.name,
                    firstname: player.player.firstname,
                    lastname: player.player.lastname,
                    age: player.player.age,
                    nationality: player.player.nationality,
                    birth: {
                        date: player.player.birth.date || null,
                        place: player.player.birth.place || null,
                        country: player.player.birth.country || null,
                    },
                    height: player.player.height || null,
                    weight: player.player.weight || null,
                    position: stats.games?.position || null,
                    team: {
                        id: stats.team?.id || null,
                        name: stats.team?.name || null,
                        logo: stats.team?.logo || null,
                    },
                    careerStats: {
                        appearances: stats.games?.appearences || 0,
                        goals: stats.goals?.total || 0,
                        assists: stats.goals?.assists || 0,
                        yellowCards: stats.cards?.yellow || 0,
                        redCards: stats.cards?.red || 0,
                    },
                };
            });

            // Insert the parsed data into MongoDB
            await Player.insertMany(playerData);
            console.log(`Inserted ${playerData.length} players into MongoDB`);
        } else {
            console.log('No players found. Verify the API response and request parameters.');
        }
    } catch (err) {
        console.error('Error fetching player data:', err.message);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

fetchPlayerData();