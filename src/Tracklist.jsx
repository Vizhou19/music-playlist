import React, { useState } from "react";
import Track from "./Track";

function TrackList() {
  const [tracks, setTracks] = useState([
    { name: "Snowfall", artist: "Oneheart", album: "snowfall", id: 1 },
    { name: "Audio 002", artist: "Next to Blue", album: "Audio 002", id: 2 },
    { name: "Shootout", artist: "Izzamuzzic", album: "Shootout", id: 3 },
    { name: "Steller", artist: ".diedlonely", album: "steller", id: 4 },
    { name: "Fading", artist: ".diedlonely", album: "fading", id: 5 },
    {
      name: "facing your fears - slowed",
      artist: "Azure",
      album: "calm yourself",
      id: 6,
    },
    { name: "Kingdom", artist: "Downstait", album: "Kingdom", id: 7 },
    {
      name: "Dead End Road",
      artist: "Jelly Roll",
      album: "Twisters: The Album",
      id: 8,
    },
    {
      name: "Firm Foundation",
      artist: "Cody Carnes",
      album: "Firm Foundation",
      id: 9,
    },
    {
      name: "My Way",
      artist: "Limp Bizkit",
      album: "Chocolate Starfish And The Hot Dog Flavored Water",
      id: 10,
    },
    {
      name: "Refuge",
      artist: "Skillet",
      album: "Dominion",
      id: 11,
    },
    {
      name: "Double Cherry Blossom",
      artist: "Reix",
      album: "Honkai Impact Lo-Fi Mixes, Vol. 2",
      id: 12,
    },
    {
      name: "Vampire",
      artist: "Our Last Night",
      album: "Vampire",
      id: 13,
    },
    {
      name: "Megalovania",
      artist: "RichaadEB",
      album: "Megalovania",
      id: 14,
    },
    {
      name: "Fire",
      artist: "MEDUZA, OneRepublic, Leory",
      album: "Fire (Offical UEFA Euro 2024 Song)",
      id: 15,
    },
  ]);

  return (
    <div className="track-list">
      <h2>TrackList</h2>
      {tracks.map((track) => (
        <Track
          key={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
        />
      ))}
    </div>
  );
}

export default TrackList;
