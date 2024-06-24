//React import statement
import React from "react";

//Importing styling components
import Button from "react-bootstrap/Button";

/*Deposit component takes in the deposit variable as a prop
and returns the deposit button with the deposit functionality*/
const Deposit = ({deposit}) => {
    return (
        <div className="Deposit">
            <Button onClick ={() => deposit(document.getElementById("userNum").value)} variant="outline-success" id="buttonDepo">
                <b>Deposit Money</b>
            </Button>
        </div>
    );
}

export default Deposit;