import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerValue, setPlayerValue] = useState(initialName);

  const playerChangeHandler = (e) => {
    setPlayerValue(e.target.value);
  };
  let playerName = <span className="player-name">{playerValue}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={playerValue}
        onChange={playerChangeHandler}
      />
    );
  }

  const handleEditClick = () => {
    setIsEditing((active) => !active);
  };
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
};

export default Player;
