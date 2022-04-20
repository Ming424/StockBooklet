import React from "react";
import {
  Modal,
  Row,
  Col,
  ButtonGroup,
  Button,
  Container,
} from "react-bootstrap/";

import { FiEdit2, FiMenu, FiTrash2 } from "react-icons/fi";

function Sidebar(props) {
  return (
    <Modal
      id="watchListSetting"
      show={props.watchesSettingModal}
      onHide={props.watchesSettingOnclick}
    >
      <Modal.Header closeButton>
        <Modal.Title>Watch list setting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.watches.map((watch, index) => (
          <div key={index}>
            <Container>
              <Row className="py-1">
                <Col xs lg="6">
                  {watch.grp}
                </Col>
                <ButtonGroup as={Col} size="sm">
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => props.listItemEditOnClick(index)}
                  >
                    <FiEdit2 />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => props.listItemRemoveOnClick(index)}
                  >
                    <FiTrash2 />
                  </Button>
                </ButtonGroup>

                <Button lg="1" as={Col} variant="list" size="sm">
                  <FiMenu />
                </Button>
              </Row>
            </Container>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.watchesSettingOnclick}>
          Cancel
        </Button>
        <Button variant="primary" onClick={props.watchesSettingOnclick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Sidebar;
