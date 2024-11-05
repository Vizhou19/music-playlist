import React, { useState } from "react";
import TrackList from "./Tracklist";

function Playlist() {
  const [playlists, setPlaylists] = useState([]);

  const addPlaylists = (name, tracks) => {
    setPlaylists([...playlists, { name, tracks }]);
  };

  return (
    <div className="playlist">
      <h2>My Playlists</h2>
      <TrackList addPlaylists={addPlaylists} />
    </div>
  );
}

export default Playlist;
