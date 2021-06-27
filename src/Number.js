import React from "react";

const Number = (props) => {
  return (
    <div className="grid-item">
      <button
        className={`unbutton ${
          props.myNumbers.includes(props.number) ? "numSelected" : ""
        }`}
        onClick={() => props.buttonClick(props.number)}
      >
        {props.number}
      </button>
    </div>
  );
};

export default Number;
