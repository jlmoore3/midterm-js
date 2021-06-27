import React from "react";

const CashValueButton = (props) => {
  return (
    <button
      className="cashButton"
      onClick={() =>
        props.myNumbers.length === 5
          ? props.setBet((currentBet) => [...currentBet, props.allCashVals])
          : alert("Please choose 5 numbers before placing your bet")
      }
    >
      ${props.allCashVals}
    </button>
  );
};

export default CashValueButton;
