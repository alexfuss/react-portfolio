import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class Menu extends Component {
    render() {
        return (
          <div>
          <Navbar collapseOnSelect expand="lg" className="nav">
          <img src={process.env.PUBLIC_URL + 'Images/16996ff1-4730-4e2e-8147-4f3cbe28dbbe_200x200.png'} width={50} height={50} alt="AF custom logo" loading="lazy" className="nav-img" />
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto nav-item">
                <Nav.Link className="nav-link" href="https://alexfuss.github.io/portfolio/">Portfolio</Nav.Link>
                <Nav.Link className="nav-link" href="../portfolio/Assets/Fuss_Alexander_Resume_2020.pdf">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
}

