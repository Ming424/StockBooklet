import React, { useMemo } from "react";
import {
  Row,
  Button,
  Container,
  Stack,
  Badge,
  Image,
} from "react-bootstrap/";

export default function StockProfile(props) {
  const direction2 = useMemo(
    () =>
      props.quote.o < props.quote.c
        ? "up"
        : props.quote.o > props.quote.c
        ? "down"
        : "",
    [props.quote.o, props.quote.c]
  );

  return (
    <Container className="px-1">
      <Row className="mt-2">
        <Stack direction="horizontal">
          <Image
            className="main-header-image"
            src={props.companyProfile.logo}
          ></Image>
          <div className="main-header-symbol">
            {"  "} {props.companyProfile.name} ({props.companyProfile.ticker})
          </div>
          <Badge bg="primary" className="main-header-symbol-badge">
            {props.companyProfile.country}
          </Badge>
          <Badge bg="secondary" className="main-header-symbol-badge">
            {props.companyProfile.exchange}
          </Badge>
          <Badge bg="info" className="main-header-symbol-badge">
            {props.companyProfile.finnhubIndustry}
          </Badge>
          {/* <div disabled variant="outline-secondary" className="ms-auto mt-3">Future</div> */}
        </Stack>
      </Row>
      <Row className="my-4 justify-content-between">
        <Stack direction="horizontal" gap={3}>
          <div className="main-header-price">
            {props.quote.c} {props.directionEmojis[direction2]}
          </div>
          <div className="main-header-change">
            <div
              className={
                props.quote.d > 0
                  ? "main-header-change-green"
                  : "main-header-change-red"
              }
            >
              {props.quote.d > 0 ? "+" : ""}
              {props.quote.d} ({props.quote.d > 0 ? "+" : ""}
              {props.quote.dp}%)
            </div>
          </div>
        </Stack>
      </Row>
      <Row className="my-3 justify-content-between">
        <Stack direction="horizontal" gap={2}>
          <div>High: {props.quote.h}</div>
          <div>Low: {props.quote.l}</div>
          <div>Open: {props.quote.o}</div>
          <div>Prev Close: {props.quote.pc}</div>
          <Button disabled variant="outline-secondary" className="ms-auto mr-0">News</Button>
          <Button
            href={props.companyProfile.weburl}
            variant="outline-secondary"
            target="_blank"
          >
            Website
          </Button>
        </Stack>
      </Row>
    </Container>
  );
}
