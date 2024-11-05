import React from "react";
import "./App.css";

function Track({ name, artist, album }) {
  return (
    <div className="track">
      <h3>{name}</h3>
      <p>Artist: {artist}</p>
      <p>Album: {album}</p>
    </div>
  );
}

export default Track;
