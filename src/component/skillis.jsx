import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper";

function Skills() {
  return (
    <>
      <Container
        id="skills"
        className="section-container my-skillsets  container">
        <Container className="Container-about-text px-3 py-2 my-skillsets">
          <h4 className="h5 text-secondary my-skillsets-text">My Skillsets</h4>
        </Container>
        <Container className="Container-block-5 p-0">
          <Container className="card-slider  slider p-0">
            <Container
              className=" card-slider-mask slider-mask p-0"
              id=" slider-mask-0">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, Mousewheel, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                // mousewheel={true}
                // centeredSlides={true}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}>
                <SwiperSlide
                  key="1"
                  className=" d-flex justify-content-between px-2">
                  <Container
                    className="skill-carousel slide"
                    aria-label="1 of 6">
                    <Container className="Container-skillset  h-100 d-flex flex-column justify-content-between">
                      <h1 className="h3 skill-heading d-flex align-items-start">
                        User Interface
                      </h1>
                      <p className="paragraph-skills d-flex align-items-center mb-auto mt-2">
                        Known as having "hawk eyes" by my peers, I strive for
                        pixel-perfect finalized designs.&nbsp;
                      </p>
                      <Container className="Container-image-skills d-flex align-items-end">
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed20765e4d803190a21ced_skill-sketch.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed1fe3686f2c568a1044da_skill-invision-studios.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed1fe3c8f0be42f03e9c8b_skill-XD.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed1fe3d66422259d4980f5_skill-figma.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                      </Container>
                    </Container>
                  </Container>
                  <Container
                    className="skill-carousel  slide"
                    aria-label="2 of 6"
                    role="group"
                    style={{ transform: "translateX(0px)", opacity: 1 }}>
                    <Container className="Container-skillset h-100 d-flex flex-column justify-content-between">
                      <h1 className="h3 skill-heading">User Experience</h1>
                      <p className="paragraph-skills mb-auto mt-2">
                        Understanding the problem is key to solving it. I strive
                        to mitigate assumption-based decisions and get to the
                        core of the user's pain points.&nbsp;
                      </p>
                      <Container className="Container-image-skills">
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed21940be604a9ee4727f5_skill-miro.png"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed2194d5fb568937084c81_skill-onigraffle.png"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed219435ddb6138812e21f_skill-invison.png"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                      </Container>
                    </Container>
                  </Container>
                  <Container
                    className="skill-carousel  slide"
                    aria-label="3 of 6"
                    role="group"
                    style={{ transform: "translateX(0px)", opacity: 1 }}>
                    <Container className="Container-skillset h-100 d-flex flex-column justify-content-between">
                      <h1 className="h3 skill-heading">
                        Prototyping &amp;&nbsp;Animation
                      </h1>
                      <p className="paragraph-skills mb-auto mt-2">
                        In tandem with UX, I incorporate prototyping and
                        animation to better help the users and engineers
                        visualize how the product may act.
                      </p>
                      <Container className="Container-image-skills">
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed219435ddb6138812e21f_skill-invison.png"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed2220d66422a9584984f0_skill-principle.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed1fe3d66422259d4980f5_skill-figma.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                      </Container>
                    </Container>
                  </Container>
                </SwiperSlide>
                <SwiperSlide
                  key="2"
                  className=" d-flex justify-content-between">
                  <Container className="skill-carousel  slide">
                    <Container className="Container-skillset h-100 d-flex flex-column justify-content-between">
                      <h1 className="h3 skill-heading">Project Management</h1>
                      <p className="paragraph-skills mb-auto mt-2">
                        I start by defining the problem, identifying scope,
                        curating requirement documentation, and estimating the
                        project's ROI.
                      </p>
                      <Container className="Container-image-skills">
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed2316e9cf278e65e5208b_skill-confluence.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed2316686f2c6b47104d3a_skill-jira.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed231601ebfa2bf07938c8_skill-basecamp.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed2316dec93f63a2bec45e_skill-asana.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                      </Container>
                    </Container>
                  </Container>
                  <Container className="skill-carousel  slide">
                    <Container className="Container-skillset h-100 d-flex flex-column justify-content-between">
                      <h1 className="h3 skill-heading">Web</h1>
                      <p className="paragraph-skills mb-auto mt-2">
                        My web projects are responsive, accessible, and
                        intuitive for all walks of life while reassuring they
                        will respond the same on any browser.&nbsp;
                      </p>
                      <Container className="Container-image-skills">
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed23fefb06796af706a7d1_microsoft-windows-22.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed23fe2a1f37fa108588b3_apple-black.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                      </Container>
                    </Container>
                  </Container>
                  <Container
                    className="skill-carousel  slide"
                    aria-label="6 of 6"
                    role="group"
                    style={{ transform: "translateX(0px)", opacity: 1 }}>
                    <Container className="Container-skillset h-100 d-flex flex-column justify-content-between">
                      <h1 className="h3 skill-heading">Mobile</h1>
                      <p className="paragraph-skills mb-auto mt-2">
                        The foundation for all my designs, my mobile projects
                        specialize in accessibility while utilizing Material
                        Design and Apple Human Design.
                      </p>
                      <Container className="Container-image-skills">
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed23e025f2971671d8899c_android.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed23e03a2b7b6e0138a123_apple-ios.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          width={35}
                          height={35}
                          alt=""
                          className="image-skill hide"
                        />
                      </Container>
                    </Container>
                  </Container>
                </SwiperSlide>
                <br />
                <br />
                <br />
              </Swiper>
            </Container>
            <Container
              className="hero-slider_arrow-button btn slider-arrow-left"
              tabIndex={0}
              aria-controls=" slider-mask-0"
              aria-label="previous slide">
              <Container className="display-none  icon-slider-left" />
            </Container>
            <Container
              className="hero-slider_arrow-button btn display-none  slider-arrow-right"
              tabIndex={0}
              aria-controls=" slider-mask-0"
              aria-label="next slide"
              style={{}}>
              <Container className=" icon-slider-right" />
            </Container>
            <Container className="card-slider_dot-navigation  slider-nav  round">
              <Container
                className=" slider-dot btn active"
                data-wf-ignore=""
                aria-label="Show slide 1 of 2"
                aria-pressed="true"
                tabIndex={0}
                style={{ marginLeft: 5, marginRight: 5 }}
              />
              <Container
                className=" btnslider-dot"
                data-wf-ignore=""
                aria-label="Show slide 2 of 2"
                aria-pressed="false"
                tabIndex={-1}
                style={{ marginLeft: 5, marginRight: 5 }}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Skills;
