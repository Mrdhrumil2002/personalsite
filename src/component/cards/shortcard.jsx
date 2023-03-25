import React from "react";
import { Container, Card, Row } from "react-bootstrap";

function Shortcard() {
  return (
    <>
      {/*------------------------------------2 card 1--------------------------------------*/}
      <Container>
        <Row>
          <div className=" col p-0">
            <div className=" short-card  short-card-1-1 p-0 m-1 mx-3 row">
              <div className=" col-6 p-5 ">
                <div className="h3 pb-2 long-card-title">
                  Special title treatment
                </div>
                <Card.Text className="h5 long-card-para">
                  lorem-ipsum - CodeSandboxhttps codesandbox.io Sign up for free
                  to save your work0/3 Sandboxes used - Anonymous. CodeSandbox.
                  lorem-ipsum. 0. Embedxample apps on CodeSandbox.
                </Card.Text>
              </div>
              <div className=" col-6 ">
                <img
                  className="w-100"
                  src="https://source.unsplash.com/random/30×30"
                  alt=" "></img>
              </div>
            </div>
          </div>
          <div className=" col p-0">
            <div className=" short-card short-card-1-2 p-0 m-1 mx-3 row">
              <div className=" col-6 p-5 ">
                <div className="h3 pb-2 long-card-title">
                  Special title treatment
                </div>
                <Card.Text className="h5 long-card-para">
                  lorem-ipsum - CodeSandboxhttps codesandbox.io Sign up for free
                  to save your work0/3 Sandboxes used - Anonymous. CodeSandbox.
                  lorem-ipsum. 0. Embedxample apps on CodeSandbox.
                </Card.Text>
              </div>
              <div className=" col-6 ">
                <img
                  className="w-100"
                  src="https://source.unsplash.com/random/30×30"
                  alt=" "></img>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <br />

      {/*------------------------------------2 card 2--------------------------------------*/}
      <Container>
        <Row>
          <div className=" col p-0">
            <div className=" short-card short-card-2-1 p-0 m-1 mx-3 row">
              <div className=" col-6 p-5 ">
                <div className="h3 pb-2 long-card-title">
                  Special title treatment
                </div>
                <Card.Text className="h5 long-card-para">
                  lorem-ipsum - CodeSandboxhttps codesandbox.io Sign up for free
                  to save your work0/3 Sandboxes used - Anonymous. CodeSandbox.
                  lorem-ipsum. 0. Embedxample apps on CodeSandbox.
                </Card.Text>
              </div>
              <div className=" col-6 ">
                <img
                  className="w-100"
                  src="https://source.unsplash.com/random/30×30"
                  alt=" "></img>
              </div>
            </div>
          </div>
          <div className=" col p-0">
            <div className=" short-card short-card-2-2 p-0 m-1 mx-3 row">
              <div className=" col-6 p-5 ">
                <div className="h3 pb-2 long-card-title">
                  Special title treatment
                </div>
                <Card.Text className="h5 long-card-para">
                  lorem-ipsum - CodeSandboxhttps codesandbox.io Sign up for free
                  to save your work0/3 Sandboxes used - Anonymous. CodeSandbox.
                  lorem-ipsum. 0. Embedxample apps on CodeSandbox.
                </Card.Text>
              </div>
              <div className=" col-6 ">
                <img
                  className="w-100"
                  src="https://source.unsplash.com/random/30×30"
                  alt=" "></img>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <br />
    </>
  );
}

export default Shortcard;
