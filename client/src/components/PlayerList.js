import React, { useEffect, useState } from 'react';
import { fetchPlayers } from './api';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const getPlayers = async () => {
            const { data } = await fetchPlayers();
            setPlayers(data);
        };
        getPlayers();
    }, []);

    return (
        <div>
            <h1>Players</h1>
            <ul>
                {players.map((player) => (
                    <li key={player._id}>{player.name} - {player.position}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;
