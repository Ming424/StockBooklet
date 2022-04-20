import React, { useMemo } from "react";
import { Row, Button, Container, Stack, Badge, Image } from "react-bootstrap/";
import { BiNote, BiNews, BiLinkAlt } from "react-icons/bi";
import { AiOutlineStar, AiFillYahoo } from "react-icons/ai";

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
        <Stack direction="horizontal" gap={1}>
          <Image
            className="main-header-image"
            src={props.companyProfile.logo}
            data-cy="main-header-image"
          ></Image>
          <div className="main-header-symbol" data-cy="main-header-symbol">
            {"  "} {props.companyProfile.name} ({props.companyProfile.ticker})
          </div>
          <Badge
            bg="primary"
            className="main-header-symbol-badge"
            data-cy="main-header-country"
          >
            {props.companyProfile.country}
          </Badge>
          <Badge
            bg="secondary"
            className="main-header-symbol-badge"
            data-cy="main-header-exchange"
          >
            {props.companyProfile.exchange}
          </Badge>
          <Badge
            bg="info"
            className="main-header-symbol-badge"
            data-cy="main-header-finnhubIndustry"
          >
            {props.companyProfile.finnhubIndustry}
          </Badge>
          <Button disabled variant="outline-secondary" className="ms-auto mr-1">
            <AiOutlineStar />
          </Button>
          <Button disabled variant="outline-secondary">
            <BiNote />
          </Button>
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
        <Stack direction="horizontal" gap={1}>
          <div>High: {props.quote.h}</div>
          <div>Low: {props.quote.l}</div>
          <div>Open: {props.quote.o}</div>
          <div>Prev Close: {props.quote.pc}</div>
          <Button disabled variant="outline-secondary" className="ms-auto mr-0">
            <BiNews></BiNews>
          </Button>
          <Button disabled variant="outline-secondary">
            <AiFillYahoo />
          </Button>
          <Button
            href={props.companyProfile.weburl}
            variant="outline-secondary"
            target="_blank"
            data-cy="to-website"
          >
            <BiLinkAlt />
          </Button>
        </Stack>
      </Row>
    </Container>
  );
}
