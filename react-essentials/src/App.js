import Header from "./components/header/Header"
import USerInput from "./components/calculator/UserInput"
import { useState } from "react";
import './App.css'
import Results from "./components/calculator/Results";

// import TenureTable from "./components/TenureTable/TenureTable"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevValue) => {
      return { ...prevValue, [inputIdentifier]: +newValue };
    });
  };
  return (
    <div>
      <Header />
      <USerInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than Zero.</p>}
      {inputIsValid &&
        <Results userInput={userInput} />

      }
    </div>
  )
}

export default App
