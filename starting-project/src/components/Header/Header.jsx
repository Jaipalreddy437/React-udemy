import React from "react";
import reactImg from "../../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function randomText(num) {
  return Math.floor(Math.random() * (num + 1));
}
const description = reactDescription[randomText(1)];
const Header = () => {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
