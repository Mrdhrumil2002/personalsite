import React from "react";
import { Container } from "react-bootstrap";
import Longcard1 from "./longcard1";
import Longcard2 from "./longcard2";
import Shortcard from "./shortcard";

function Cards() {
  return (
    <>
      <Container>
        <Longcard1> </Longcard1>
        <Shortcard></Shortcard>
        <Longcard2> </Longcard2>
      </Container>
    </>
  );
}

export default Cards;
