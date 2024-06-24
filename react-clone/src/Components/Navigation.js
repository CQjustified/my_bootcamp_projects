//React import statement
import React from "react";

//importing bootstrap navigation components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

/*reference, icon and alt objects for smaller navigation
toolbar*/

const references = {
  ref1:"#searchBar",
  ref2:"#login",
  ref3:"#shopCart",
}
const icons = {
icon1:"https://storage.needpix.com/rsynced_images/magnifying-glass-1976105_1280.png",
icon2:"https://storage.needpix.com/thumbs/profile-42914_1280.png",
icon3:"https://storage.needpix.com/thumbs/shopping-cart-371980_1280.png",
}

const alts = {
alt1:"search bar icon",
alt2:"Login icon",
alt3:"Shopping cart icon",
}

//Navigation function which returns the main Navbar of webpage
function Navigation() {
  return (
    <div>
     <Navbar className="navBar" bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src = "https:////uk.graze.com/cdn/shop/files/Graze_Logo.svg?v=1711650244&amp;width=240"
            alt="graze logo" width="240"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#latestbox" style = {{color: "#00984a", letterSpacing: "4px", marginRight: "20px"}}><b>OUR LATEST BOX</b></Nav.Link>
            <NavDropdown title="SHOP" id="shop-dropdown" renderMenuOnMount="true">
              <NavDropdown.Item href="#stockUp">stock up</NavDropdown.Item>
              <NavDropdown.Item href="#stock1">snack bundles</NavDropdown.Item>
              <NavDropdown.Item href="#stock2">multipack</NavDropdown.Item>
              <NavDropdown.Item href="#stock3">new</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="#aboutUs" style = {{color: "#00984a", letterSpacing: "4px", marginLeft: "25px"}}><b>ABOUT</b></Nav.Link>
            {/* Smaller navigation toolbar embedded in the main navigation bar 
            and utilises the reference, icon and alt object values*/}
            <Navbar.Brand href={references.ref1}>
                <img src={icons.icon1}
                width="30"
                height="30"
                className="d-inline-block align-top-right"
                alt={alts.alt1}
                />
            </Navbar.Brand>
            <Navbar.Brand href={references.ref2}>
                <img src={icons.icon2}
                width="30"
                height="30"
                className="d-inline-block align-top-right"
                alt={alts.alt2}
                />
            </Navbar.Brand>
            <Navbar.Brand href={references.ref3}>
                <img src={icons.icon3}
                width="30"
                height="30"
                className="d-inline-block align-top-right"
                alt={alts.alt3}
                />
            </Navbar.Brand>
          </Nav>
        </Container>
     </Navbar>
    </div>
  );
}

export default Navigation;