//React import statement
import React from "react";

//Bootstrap styling component import statements
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//CarBox function returns the Suscribe email label button of the webpage
function CardBox () {
    return (
        <Card className="CardBox">
          <Card.Body>
            <Card.Title style={{color: "#00964b", fontSize: "32px"}}>Discover this month's box</Card.Title>
            <Card.Text>This month’s theme is all about a spring awakening, new beginnings and moving slowly away from the cold winter temperatures.</Card.Text>
            <Button style={{background: "#00964b", border: "2px solid #00964b",  color: "#fff", width: "50%"}}>SUSCRIBE NOW</Button>
          </Card.Body>
        </Card>
    )
}

export default CardBox;