import React, { useState } from 'react';

const SearchBar = ({ setPlayerData }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/players');
      const data = await response.json();

      const filteredPlayers = data.filter((player) =>
        `${player.firstname} ${player.lastname}`.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setPlayerData(filteredPlayers.length > 0 ? filteredPlayers[0] : null);
    } catch (error) {
      console.error('Error fetching player data:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search by player name (e.g., Lionel Messi)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;