import React from "react";

const Button = ({ children, mode = "filled", Icon, ...props }) => {
  let cssClass = `button ${mode}-button`;
  if (Icon) {
    cssClass += " icon-button";
  }
//   if (props.className) {
//     cssClass += " " + props.className;
//   }
  return (
    <button className={cssClass} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
