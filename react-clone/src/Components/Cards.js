//React import statement
import React from "react";

//Bootstrap styling component statements
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//CardDisp function which uses the Bootstrap style Card component modified with text next to the image
function CardDisp(props) {
    return (
        <Card className="d-flex flex-row position-center col-sm-6 col-md-6 col-xs-6">
          <Card.Img className = "d-block w-50 h-75 align-self-center" variant="top" src={props.image}/>
          <Card.Body className="d-flex flex-row row g-60 justify-content-left">
            <Card.Title style={{color: "#00964b", fontSize: "32px"}}>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Button style={{background: "#00964b", border: "2px solid #00964b",  color: "#fff", width: "50%"}}>{props.btnTitle}</Button>
          </Card.Body>
        </Card>
    );
  }
export default CardDisp;