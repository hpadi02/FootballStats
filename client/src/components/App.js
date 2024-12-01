import React, { useState } from 'react';
import './App.css';
import SearchBar from './Searchbar';
import PlayerStats from './Playerstats';

function App() {
  const [player, setPlayer] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Football Player Directory</h1>
      </header>
      <main>
        {/* Pass setPlayer to SearchBar */}
        <SearchBar setPlayerData={setPlayer} />
        {/* Display PlayerStats */}
        <PlayerStats player={player} />
      </main>
    </div>
  );
}

export default App;