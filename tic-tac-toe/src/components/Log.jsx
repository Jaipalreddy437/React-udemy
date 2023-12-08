import React from "react";

<<<<<<< HEAD
const Log = ({onSendData}) => {
  return (
    <ol id='log'>
      {/* {onSendData}  */}
      </ol>
  )
}
=======
const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};
>>>>>>> 386359f29e5da17587c5db6b49ce72099e83c719

export default Log;
