import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  Navbar,
  Nav,
  Modal,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap/";
import React, { useState } from "react";
import "./App.css";
import { FaBeer } from "react-icons/fa";
// https://react-icons.github.io/react-icons/icons?name=fi
import {
  FiEdit2,
  FiSettings,
  FiMenu,
  FiTrash2,
  FiSearch,
} from "react-icons/fi";
import logo from "./logo.svg";

function App() {
  const [watches] = useState([
    { grp: "Default", lists: [{ sym: "TSLA" }, { sym: "AAPL" }] },
    { grp: "Default2", lists: [{ sym: "AAPL" }] },
  ]);
  const [indexToogle, setIndexToogle] = useState(true);
  const [currentWatch, setCurrentWatch] = useState(0);
  const [watchesSettingModal, setWatchesSettingModal] = useState(false);
  const [user] = useState({
    username: "Thierry",
    hideUsername: false,
    darkMode: false,
    defaultDiagram: 0,
  });

  const watchOnClick = (i) => {
    console.log("watchOnClick()", i);
    setCurrentWatch(i);
    console.log(currentWatch);
  };

  const watchesSettingOnclick = () => {
    console.log("watchesSettingOnclick()");
    setWatchesSettingModal(!watchesSettingModal);
  };

  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar
        id="navbar"
        bg="dark"
        variant="dark"
        className="px-0 py-1 container-fluid"
        fixed="top"
      >
        <Container fluid>
          <Form>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
          <Navbar.Brand href="#home" className="ml-0">
            <img
              alt="App Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            StockBooklet
          </Navbar.Brand>
          <Nav>
            <NavDropdown
              title={user.username.hideUsername ? "User" : user.username}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Setting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid style={{ backgroundColor: "gray" }} className="mt-0">
        <Row>
          <Col style={{ backgroundColor: "#9C9E9A" }} sm={3}>
            <div id="sidebar">
              <div>
                {watches.map((watch, index) => (
                  <React.Fragment key={index}>
                    <Button size="sm" onClick={() => watchOnClick(index)}>
                      {watch.grp}{" "}
                    </Button>
                  </React.Fragment>
                ))}

                {/* <FiSettings onClick={() => watchesSettingOnclick()} /> */}
                <Button size="sm" onClick={() => watchesSettingOnclick()}>
                  <FiSettings />
                </Button>
              </div>
              {/* <div>
                {watches[currentWatch].lists.map((list, index) => (
                  <div key={index}>{list.sym}</div>
                ))}
              </div> */}
              {watches[currentWatch].lists.map((list, index) => (
                <Container fluid className="p-0 m-0 ">
                  <Row
                    className="py-1"
                    style={{ position: "relative", backgroundColor: "white" }}
                  >
                    <Col
                      sm={6}
                      style={{
                        backgroundColor: "#FFDDFD",
                      }}
                    >
                      {list.sym}
                    </Col>
                    <Col
                      sm={2}
                      style={{
                        backgroundColor: "#FFDDDD",
                        position: "absolute",
                        right: 60,
                        textAlign: "right",
                      }}
                    >
                      123
                    </Col>
                    <Col
                      sm={2}
                      className="text-right"
                      style={{
                        backgroundColor: "#DDFFDF",
                        position: "absolute",
                        right: 10,
                        // textAlign: "right",
                      }}
                    >
                      <span
                        style={{
                          textAlign: "right",
                        }}
                      >
                        +111%
                      </span>
                    </Col>
                  </Row>
                </Container>
              ))}
            </div>
          </Col>
          <Col style={{ backgroundColor: "" }} sm={9}>
            <div id="content">
              SUP
              <Button variant="primary">Primary</Button>{" "}
              <h3>
                {" "}
                Lets go for a <FaBeer color="red" />?{" "}
              </h3>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
              <h1>SUP</h1>
            </div>
          </Col>
        </Row>
      </Container>
      {/*  */}
      <Modal show={watchesSettingModal} onHide={watchesSettingOnclick}>
        <Modal.Header closeButton>
          <Modal.Title>Watch list setting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {watches.map((watch, index) => (
            <div key={index}>
              {watch.grp}
              <Button variant="info" size="sm">
                <FiEdit2 />
              </Button>
              <Button variant="danger" size="sm">
                <FiTrash2 />
              </Button>
              <Button variant="list" size="sm">
                <FiMenu />
              </Button>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={watchesSettingOnclick}>
            Cancel
          </Button>
          <Button variant="primary" onClick={watchesSettingOnclick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

export default App;
