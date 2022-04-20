import React from "react";
import { Badge, ListGroup, Button } from "react-bootstrap/";
import { FiSettings } from "react-icons/fi";

function Sidebar(props) {
  return (
    <div data-cy="sidebar">
      {/* LIST-GROUPS */}
      <div
        id="watch-list-group"
        className="p-1"
        data-cy="sidebar-watches-groups"
      >
        {props.watches.map((watch, index) => (
          <React.Fragment key={index}>
            <Button
              data-cy={`sidebar-watches-groups-${watch.grp}`}
              className="watch-list-group-item"
              size="sm"
              onClick={() => props.setCurrentWatchList(index)}
            >
              {watch.grp}{" "}
            </Button>
          </React.Fragment>
        ))}
        <Button
          className="watch-list-group-item"
          size="sm"
          onClick={() => props.watchesSettingOnclick()}
        >
          <FiSettings />
        </Button>
      </div>
      {/* GROUP-ITEMS */}
      <ListGroup className="sidebar-list-group">
        {props.watches[props.currentWatchList].lists.map((list, index) => (
          <ListGroup.Item
            key={index}
            data-cy={`sidebar-watches-item-${list.sym}`}
            className="sidebar-list-group-item d-flex justify-content-between align-items-start"
            action
            onClick={() => props.setSymbol(list.sym)}
          >
            <div className="sidebar-list-group-item-sym">{list.sym}</div>
            <div>
              <span className="sidebar-list-group-item-price">
                {list.quote.c}
              </span>{" "}
              {"  "}
              <Badge
                bg={list.quote.d > 0 ? "success" : "danger"}
                className="sidebar-list-group-item-change"
              >
                {list.quote.d > 0 ? "+" : ""}
                {list.quote.dp}%
              </Badge>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Sidebar;
