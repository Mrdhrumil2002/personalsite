import React from "react";
import { Container } from "react-bootstrap";

function Aboutline() {
  return (
    <>
      <Container className="section-header  pr-0">
        <Container className="Container-section-header">
          <Container className="section-header-column px-0 border-bottom d-flex row">
            <Container className="column-svg-n-title d-flex col  col-10">
              <span className="heading-5" role="img" aria-label=" ">
                👨‍💻
              </span>
              <h className="h4 my-0 mx-3 py-2 about-text" id="#about">
                About
              </h>
            </Container>
            <Container className="column-view-more h-80 pr-0 col-2">
              <div className=" d-flex align-content-end">
                <Container className=" section-header-link-cont p-0 d-flex ">
                  <a
                    href="https://www.linkedin.com/in/mrdhrumil2002"
                    className="  section-header-link  px-0 text-dark d-flex ">
                    View Linkedin
                  </a>
                </Container>
                <Container className="align-content-end section-header-icon h2 px-0 ">
                  →
                </Container>
              </div>
              <br />
            </Container>
          </Container>
        </Container>
      </Container>
      <br />
      <br />
    </>
  );
}

export default Aboutline;
