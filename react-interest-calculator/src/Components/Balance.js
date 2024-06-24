//React import statement
import React from "react";

/*Balance component for displaying the user’s current bank balance
to 2 decimal places*/

const Balance = ({balance}) => {
    return (
        <div>
            Your Account balance is: £{balance.toFixed(2)}
        </div>
    );
}

export default Balance;