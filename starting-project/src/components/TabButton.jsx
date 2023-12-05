import React from "react";

// const TabButton = ({ children, isSelected, onSelect }) => {
//   return (
//     <li>
//       <button className={isSelected ? "active" : undefined} onClick={onSelect}>
//         {children}
//       </button>
//     </li>
//   );
// };

// other way
const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
