import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles.css";

function Navbars() {
  // const [isHover, setIsHover] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };

  // const boxStyle = {
  //   webkitTransition: "all .2s ease",
  //   mozTransition: "all .2s ease",
  //   transition: "all .2s ease",
  //   // style={{
  //   fontSize: isHover ? "1.16em" : "",
  //   color: isHover ? " rgb(140, 7, 207)" : "rgb(116, 116, 116)"
  //   // }}
  // };

  return (
    <>
      <Navbar sticky="top" className="border-bottom py-0 navbar ">
        <Container className="px-5  mx-auto" onClick=" ">
          <Navbar.Brand href="#home">
            <img
              src="https://i.ibb.co/HqJYq2C/Screenshot-2022-10-31-22-42-04-92-40deb401b9ffe8e1df2f1cc5ba480b12.jpg"
              width="75"
              height="60"
              alt="just img"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Nav className="navbar-side">
            <Container className="navbar-component">
              <a href="#home" className="mx-auto">
                Home
              </a>
            </Container>
            <Container className=" navbar-component ">
              <a href="#skills" className=" mx-auto">
                Skills
              </a>
            </Container>
            <Container className="  navbar-component">
              <a href="#about" className=" mx-auto">
                About
              </a>
            </Container>
            <Container className=" navbar-component">
              <a href="#contact" className=" mx-auto">
                Contact
              </a>
            </Container>
            <Container className=" navbar-component">
              <a href="#Education" className=" ">
                Education
              </a>
            </Container>
            <Container className=" navbar-component">
              <a href="#experiance" className=" px-auto ">
                Experiance
              </a>
            </Container>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
    </>
  );
}

export default Navbars;
