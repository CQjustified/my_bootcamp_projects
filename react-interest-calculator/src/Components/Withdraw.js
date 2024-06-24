//React import statement
import React from "react";

//Importing styling components
import Button from "react-bootstrap/Button";

/*Withdraw component takes in the withdraw variable as a prop
and returns the withdrawal button with the withdrawal functionality*/
const Withdraw = ({withdraw}) => {
    return (
        <div className="Withdraw">
            <Button onClick={() => withdraw(document.getElementById("userNum").value)} variant="outline-primary" id="buttonDraw">
                <b>Withdraw Money</b>
            </Button>
        </div>
    )
}

export default Withdraw
