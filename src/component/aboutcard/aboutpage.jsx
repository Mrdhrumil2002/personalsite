import React from "react";
import { Container } from "react-bootstrap";
import Aboutline from "./aboutline";

function Aboutpage() {
  return (
    <>
      <Container id="about" className="content-section wf-section">
        <Aboutline></Aboutline>

        <Container className="section-homepage d-flex ">
          <Container className="Container-text-l j-top">
            <h5 className=" my-story-text h5 ">My&nbsp;Story</h5>

            <p className="body-paragraph">
              I have been a creative leader in the digital entertainment and
              software industry since 2011. During this time, I have had the
              opportunity to work with some amazing people on several
              cutting-edge projects. Projects I’ve worked on include an aviation
              simulation game (NFA) to conceptual products for multi-million
              dollar corporations (Amazon, KBB, and more).
              <br />
              <br />
              Along this journey, I have worn several hats ranging, including
              quality assurance, UI designer, product designer, creative
              director, product manager, producer, and Director of Product.
              <br />
              <br />
              As a designer, I have managed several small creative teams in
              creating innovative products and prototypes. As a creative leader
              and mentor, I strive to have my teams flourish by challenging them
              to be innovative and get out of their comfort zones.
            </p>
          </Container>
          <Container className="Container-text-r j-top">
            <h4 className=" my-story-text h5 ">Where I've Worked</h4>

            <Container className="Container-block-6 px-0 ">
              <Container className="Container-work-history pl-0 mb-25">
                <h5 className="year h6">2018–2020</h5>
                <div className="d-flex">
                  <h5 className=" high-emphasis">Backbone PLM</h5>
                  <h5 id="Company-Location" className="h6 low-emphasis">
                    Boulder, Colorado
                  </h5>
                </div>
                <h5 className="body-paragraph">
                  Director of Product Design &amp; Senior Product Designer
                </h5>
              </Container>
              <br />
              <Container className="Container-work-history pl-0 mb-25">
                <h5 className="year h6">2015–2018</h5>
                <div className="d-flex">
                  <h5 className="body-paragraph high-emphasis">
                    SNT Media, Inc.
                  </h5>
                  <h5 id="Company-Location" className=" h6 low-emphasis">
                    San Francisco, California &amp; Wichita, Kansas
                  </h5>
                </div>
                <h5 className="body-paragraph">
                  Director of Product Design &amp; Senior Product Designer
                </h5>
              </Container>
              <br />
              <Container className="Container-work-history pl-0 mb-25">
                <h5 className="year h6">2012–2015</h5>
                <div className="d-flex">
                  <h5 className="body-paragraph high-emphasis">
                    SNT Media, Inc.
                  </h5>
                  <h5 id="Company-Location" className=" h6 low-emphasis">
                    San Francisco, CA
                  </h5>
                </div>
                <h5 className="body-paragraph">Product Designer</h5>
              </Container>
              <br />
              <Container className="Container-work-history pl-0 mb-25">
                <h5 className="year h6">2011–2012</h5>
                <div className="d-flex">
                  <h5 className="body-paragraph high-emphasis">F.I.R.E.</h5>
                  <h5 id="Company-Location" className=" h6 low-emphasis">
                    Orlando, Florida
                  </h5>
                </div>
                <h5 className="body-paragraph">Lead Producer</h5>
              </Container>
            </Container>
          </Container>
        </Container>

        {/* 











   */}
      </Container>
    </>
  );
}

export default Aboutpage;
