import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Container,
} from "react-bootstrap/";
import logo from ".././logo.svg";

function Header(props) {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      console.log(input[0]);
      props.setSymbol(input[0].toUpperCase());
      setInput("");
    }
  };

  return (
    <Navbar
      id="navbar"
      bg="dark"
      variant="dark"
      className="px-0 py-1 "
      fixed="top"
    >
      <Container fluid>
        <Form onSubmit={onSubmit}>
          <Form.Control
            type="text"
            placeholder="Enter Symbol"
            value={input}
            onChange={(e) => setInput([e.target.value])}
            required
            size="sm"
          />
        </Form>
        <Navbar.Brand
          href="#home"
          className="ml-0"
          onClick={() => props.test()}
        >
          <img
            alt="App Logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          StonkBooklet
        </Navbar.Brand>
        <Nav>
          <NavDropdown
            style={{ zIndex: 10, position: "relative"}}
            title={
              props.user.username.hideUsername ? "User " : props.user.username + " "
            }
            id="basic-nav-dropdown"
          >
            
            <NavDropdown.Item href="#action/3.1">Setting</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
