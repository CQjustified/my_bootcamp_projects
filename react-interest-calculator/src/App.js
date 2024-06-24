//React and state management import statements
import React from "react";
import { useState } from "react";

//importing App and bootstrap css files
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//importing functional and styling components
import Button from "react-bootstrap/Button";
import Deposit from "./Components/Deposit";
import Withdraw from "./Components/Withdraw";
import Balance from "./Components/Balance";

function App() {

  // Creating a balance state object with an initial value of 0  
  const [balance, setBalance] = useState(0);

  /*deposit constant variable takes the user input number and updates
  the value of the state with the addition of the user balance and user deposit*/
  const deposit = (userNum) => {
    setBalance(balance + parseFloat(userNum));
  }

  /* Withdraw constant variable takes the user input number and updates
  the value of the state by withdrawal amount from the user balance. 
  An alert is triggered when the user goes into a negative balance*/
  const withdraw = (userNum) => {

    if (balance - parseFloat(userNum) >= 0) {
      setBalance(balance - parseFloat(userNum));
    }
    else {
      alert("Danger, You have a negative balance!");
    }
  }

  /*interest and fee constant variables which takes in user defined interest rate or fee rate
  and applies it to the balance by updating the value of the state*/   
  const Interest = (userRate) => {
    setBalance(balance + (balance * (parseFloat(userRate)/100)));
  }

  const Fee = (bankFee) => {
    setBalance(balance - (balance * (parseFloat(bankFee)/100)));
  }

  return (
    <div className="App" >
      {/* Balance component for displaying the user’s current bank balance*/}
      <Balance balance = {balance}/>

      {/* User input field with the two separate deposit and withdraw components with a shared
      state that is lifted to the parent App component */}
      <input type ="number" id="userNum" placeholder="Please enter amount (£)"/>
      <Deposit deposit = {deposit}/>
      <Withdraw withdraw = {withdraw}/>

      {/*Interest and Fee component for applying interest or charges to the user’s current bank
      balance*/}
      <input type ="number" id="userRate" placeholder="Please enter interest rate (%)"/>
      <Button onClick={() => Interest(document.getElementById("userRate").value)} variant="warning" id="buttonRate">
        <b>Add Interest</b>
      </Button>
      <input type ="number" id="bankFee" placeholder="Please enter bank fee rate"/>
      <Button onClick={() => Fee(document.getElementById("bankFee").value)} variant="info" id="buttonFee">
        <b>Charge Fee</b>
      </Button>
    </div>
  );
}

export default App;