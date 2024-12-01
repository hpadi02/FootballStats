import React from 'react';

const PlayerStats = ({ player }) => {
  if (!player) {
    return <p>No player data to display. Search for a player!</p>;
  }

  return (
    <div className="player-stats">
      <h2>{player.name}</h2>
      <p><strong>Age:</strong> {player.age}</p>
      <p><strong>Nationality:</strong> {player.nationality}</p>
      <p><strong>Height:</strong> {player.height}</p>
      <p><strong>Weight:</strong> {player.weight}</p>
      <p><strong>Position:</strong> {player.position}</p>
      <h3>Team:</h3>
      <p>{player.team?.name || 'Unknown'}</p>
      <img src={player.team?.logo || ''} alt={`${player.team?.name} logo`} width="100" />
    </div>
  );
};

export default PlayerStats;