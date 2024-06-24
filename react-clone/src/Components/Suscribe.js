//React import statement
import React from "react";

//Bootstrap styling component statements
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

//Suscribe function for the suscribe button and email input label
function Suscribe () {
    return (
        <InputGroup className="mb-3" style={{marginTop:"10px"}}>
        <Form.Control
          placeholder="enter your email"
          aria-label="enter your email"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2" style={{background: "#00964b", border: "2px solid #00964b",  color: "#fff", width: "5%"}}>
          SUSCRIBE
        </Button>
      </InputGroup>
    )
}
export default Suscribe;