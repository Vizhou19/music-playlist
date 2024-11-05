import React from "react";
import TrackList from "./Tracklist";
import Playlist from "./Playlist";

function App() {
  return (
    <div className="app">
      <h1>My Music Playlist</h1>
      <TrackList />
      <Playlist />
    </div>
  );
}

export default App;
