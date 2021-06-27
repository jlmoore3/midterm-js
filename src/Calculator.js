import React from "react";

const Calculator = (props) => {
  return (
    <div className="column">
      <h4>Your Numbers:</h4>
      <div className="calculateBox">
        <ul className="displayNums">
          {props.myNumbers.map((num) => (
            <li>{num}</li>
          ))}
        </ul>
        <h3>Total Cash Bet: ${props.totalBet}</h3>
        {props.currentBet === 0 && (
          <p className="center">Please choose a dollar value</p>
        )}
      </div>
      <button className="bigButton" onClick={props.clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default Calculator;
