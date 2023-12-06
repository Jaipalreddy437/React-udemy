import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const playerChangeHandler = (e) => {
    setPlayerName(e.target.value);
  };
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={playerChangeHandler}
      />
    );
  }

  const handleEditClick = () => {
    setIsEditing((active) => !active);//schedules a state update to true
  };
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
};

export default Player;
