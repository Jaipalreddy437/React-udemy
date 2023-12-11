// import React, { useState } from "react";
// import { calculateInvestmentResults } from "../../util/investments";

const USerInput = ({ userInput, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="invetment">Initial Investment</label>
          <input
            value={userInput.inintialInvestment}
            type="number"
            required
            onChange={(e) => onChange("inintialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual investment">Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            type="number"
            required
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected investment">Expected Investment</label>
          <input
            value={userInput.expectedReturn}
            required
            type="number"
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            value={userInput.duration}
            required
            type="number"
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default USerInput;
