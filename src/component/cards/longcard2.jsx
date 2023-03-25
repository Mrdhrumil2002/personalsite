import React from "react";
import { Container, Card } from "react-bootstrap";

function Longcard2() {
  return (
    <>
      <Container className="p-0">
        <div className=" long-card long-card-2 p-0 m-1 mx-3 row">
          <div className=" col-6 p-5 ">
            <div className="h3 pb-2 long-card-title">
              Special title treatment
            </div>
            <Card.Text className="h5 long-card-para">
              lorem-ipsum - CodeSandboxhttps codesandbox.io Sign up for free to
              save your work0/3 Sandboxes used - Anonymous. CodeSandbox.
              lorem-ipsum. 0. Embedxample apps on CodeSandbox.
            </Card.Text>
          </div>
          <div className=" col-6 ">
            <div className=" d-flex flex-row-reverse ">
              <img
                className=" long-card-img"
                src="https://source.unsplash.com/random/30×30"
                alt=" "></img>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <br />
    </>
  );
}

export default Longcard2;
