import React from "react";
import { Container } from "react-bootstrap";

function Workline() {
  <>
    <div className=' d-flex row px-12 m-0 border-bottom'>
      <Container className='column-svg-n-title d-flex col col-12'>
        <span className='heading-5' role='img' aria-label=' '>
          ✍️
        </span>
        <h className='h4 my-0 mx-3 py-2 about-text' id='#about'>
          Work
        </h>
      </Container>
      <Container className='column-view-more h-80 pr-0 col-2'>
        <div className=' d-flex align-content-end'>
          <Container className=' section-header-link-cont p-0 d-flex '>
            <a
              href='https://www.linkedin.com/in/mrdhrumil2002'
              className='  section-header-link  px-0 text-dark d-flex '
            >
              View Work
            </a>
          </Container>
          <Container className='align-content-end section-header-icon h2 px-0 '>
            →
          </Container>
        </div>
        <br />
      </Container>
    </div>
    <br />
    <br />
  </>;
  
}

export default Workline;
