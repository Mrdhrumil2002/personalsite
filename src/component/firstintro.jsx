import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Typed from "react-typed";

const textLines = [
  "Dhrumil ",
  "a Software Devloper",
  "an Engineer",
  "a Web Devloper",
  "a Billionaire"
];

function Firstintro() {
  return (
    <>
      <Container className="mx-auto px-5  first-intro">
        <div className="row middle-xl">
          <div className="col-xl-6 first-intro-text d-flex flex-column my-auto ">
            <div className=" ">
              <p className=" h1 my-2 first-intro-text-header ">Hello there,</p>
              <p className=" h1 my-2 first-intro-text-header ">
                I am <Typed strings={textLines} typeSpeed={80} />
              </p>
              <p className="  first-intro-text-para">
                I am a software devloper with 9 years experience, focusing in
                studying and graduation. I want a job and a board game
                enthusiast.
              </p>
              <p className=" ">
                <small className="text-muted"></small>
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <img
              src="https://i.ibb.co/87P00vY/IMG-20221101-212523.jpg"
              className="img-fluid  100 rounded-start"
              alt="..."
            />
          </div>
        </div>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
}

export default Firstintro;
