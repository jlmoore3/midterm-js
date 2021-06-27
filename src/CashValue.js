import React from "react";
import CashValueButton from "./CashValueButton";

const CashValue = (props) => {
  const cashValsInit = [1, 2, 5, 10, 20, 50];

  return (
    <div className="column">
      <h4>How to Play:</h4>
      <p>
        Select <strong>five</strong> numbers from the boxes below. Choose your
        cash bet. This system will print out your ticket, and you'll find out if
        you win when the numbers are drawn!
      </p>
      {cashValsInit.map((allCashVals, i) => (
        <CashValueButton
          allCashVals={allCashVals}
          setBet={props.setBet}
          myNumbers={props.myNumbers}
        />
      ))}

      <button className="bigButton" onClick={props.resetBet}>
        Reset Cash Bet
      </button>
    </div>
  );
};

export default CashValue;
