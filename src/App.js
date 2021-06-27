import logo from "./logo.svg";
import "./App.css";
import Numbers from "./Numbers";
import CashValue from "./CashValue";
import Calculator from "./Calculator";
import { useState } from "react";

function App() {
  const [currentBet, setBet] = useState([]);
  const [myNumbers, setNumbers] = useState([]);
  const [myTickets, setTickets] = useState([]);
  const numbersArr = [];
  for (let i = 1; i < 21; i++) {
    numbersArr.push(i);
  }

  const buttonClick = (num) => {
    if (myNumbers.length >= 5 && !myNumbers.includes(num)) {
      console.log("Array has 5 elements already");
    } else {
      if (myNumbers.includes(num)) {
        console.log(`${num} already found`);
        removeNum(num);
        console.log(myNumbers);
      } else if (!myNumbers.includes(num)) {
        setNumbers((myNumber) => [...myNumber, num]);
        console.log(myNumbers);
      }
    }
  };

  const removeNum = (myNum) => {
    setNumbers(() => [...myNumbers.filter((filterNum) => filterNum !== myNum)]);
  };

  let totalBet = 0;
  currentBet.forEach(function (n) {
    totalBet += n;
  });

  const clearAll = () => {
    setNumbers(() => []);
    setBet(() => []);
  };

  const cashOut = () => {
    if (myNumbers.length === 5 && totalBet > 0) {
      alert(`Cashed out. Ticket Bet: $${totalBet} for Numbers: ${myNumbers}`);
      const thisTicket = {
        totalBet: totalBet,
        myNumbers: myNumbers.join(", "),
      };
      setTickets((myTickets) => [...myTickets, thisTicket]);
      clearAll();
    } else if (myNumbers.length === 5 && totalBet < 1) {
      alert(`Please choose your bet first`);
    } else if (myNumbers.length !== 5) {
      alert(`Please choose 5 numbers`);
    }
  };

  const displayTickets = myTickets.map((tix) => (
    <li key={tix.mynumbers}>
      <span className="text-left">${tix.totalBet}:</span>{" "}
      <span className="text-right">{tix.myNumbers}</span>
    </li>
  ));

  const resetBet = () => {
    setBet(() => []);
  };

  let randomNumsArray = [];

  const randomNums = () => {
    for (let i = 0; i < 5; ) {
      let singleRandom = Math.floor(Math.random() * 20) + 1;
      if (!randomNumsArray.includes(singleRandom)) {
        randomNumsArray.push(singleRandom);
        i++;
      }
    }
    setNumbers(() => [...randomNumsArray]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WHE WHE Lottery System</h1>
        <ul className="displayTix">{displayTickets}</ul>
        <div className="body-container">
          <CashValue
            currentBet={currentBet}
            setBet={setBet}
            buttonClick={buttonClick}
            resetBet={resetBet}
            myNumbers={myNumbers}
          />
          <Numbers
            numbersArr={numbersArr}
            myNumbers={myNumbers}
            buttonClick={buttonClick}
            randomNums={randomNums}
          />
          <Calculator
            currentBet={currentBet}
            myNumbers={myNumbers}
            totalBet={totalBet}
            clearAll={clearAll}
          />
        </div>
        <button className="biggestButton bigButton" onClick={cashOut}>
          Cash Out
        </button>
      </header>
    </div>
  );
}

export default App;
