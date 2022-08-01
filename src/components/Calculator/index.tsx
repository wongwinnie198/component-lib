import React from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeys from "./CalculatorKeys";
import './calculator.css';

export default function index() {
  return (
    <div className="calculator-container">
    <div className="calculator-inner-container">
      <div className="calculator-display-container">
        <CalculatorDisplay />
      </div>
      <div>
        <CalculatorKeys />
      </div>
    </div>
    </div>
  );
}
