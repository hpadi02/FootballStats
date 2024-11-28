import React from 'react';
import './App.css'; // This is fine if the file exists
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>American Football Stats</h1>
      </header>
      <main>
        <AddPlayer />
        <PlayerList />
      </main>
    </div>
  );
}

export default App;
