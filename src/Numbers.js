import React from "react";
import Number from "./Number.js";
const Numbers = (props) => {
  return (
    <div className="column">
      <div className="grid-container">
        {props.numbersArr.map((number, i) => (
          <Number
            key={i}
            number={number}
            myNumbers={props.myNumbers}
            count={props.count}
            buttonClick={props.buttonClick}
          />
        ))}
      </div>
      <button className="bigButton" onClick={props.randomNums}>
        Pick 5 Random
      </button>
    </div>
  );
};

export default Numbers;
