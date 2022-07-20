import React from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

export default function Navit() {
  return (
    <div className="navbar navbar-brand">
      <Navbar color="blue" expand="md" light>
        <i className="fa fa-medium"></i>
        <NavbarBrand href="/">PRS</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto navbar-button" navbar>
            <NavItem className="navbar-button">
              <NavLink to="/employees">Employees</NavLink>
            </NavItem>{" "}
            <NavItem className="navbar-button">
              {/* <NavLink href="/form1">Form Demo1</NavLink> */}
              <NavLink to="/doctors">Doctors</NavLink>
            </NavItem>
            <NavItem className="navbar-button">
              {/* <NavLink href="/form1">Form Demo1</NavLink> */}
              <NavLink to="/patients">Patients</NavLink>
            </NavItem>
            <NavItem className="navbar-button">
              <NavLink to="/photos">Photos</NavLink>
            </NavItem>
          </Nav>
          {/* <CartSummary
              cart={this.props.cart}
              resetCart={this.props.resetCart}
              removeFromCart={this.props.removeFromCart}
            /> */}
        </Collapse>
      </Navbar>
    </div>
  );
}
