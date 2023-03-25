import React from "react";
import { Container, Section } from "react-bootstrap";
function Footer() {
  return (
    <>
      <section id="contact" className="footer">
        <div className="box-container d-flex flex-row px-5 mx-5">
          <div className="box col-sm-3">
            <h3>Dhrumil's Portfolio</h3>
            <p>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials. <br /> <br /> Keep Rising 🚀. Connect with me
              over live chat!
            </p>
          </div>
          <div className="box col-sm-3">
            <h3>Quick Links</h3>
            <a href="#home">
            </a>
            <a href="#about">
              <i className="fas fa-chevron-circle-right" /> About
            </a>
            <a href="#skills">
              <i className="fas fa-chevron-circle-right" /> Skills
            </a>
            <a href="#education">
              <i className="fas fa-chevron-circle-right" /> Education
            </a>
            <a href="#work">
              <i className="fas fa-chevron-circle-right" /> Work
            </a>
            <a href="#experience">
              <i className="fas fa-chevron-circle-right" /> Experience
            </a>
          </div>
          <div className="box col-sm-3">
            <h3>Contact Info</h3>
            <p>
              {" "}
              <i className="fas fa-phone" />
              +91 7990929809
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope" />
              mrdhrumil2002@gmail.com
            </p>
            <p>
              {" "}
              <i className="fas fa-map-marked-alt" />
              Surat, India-395007
            </p>
            {/* <div className="share ">
              <a
                href="https://www.linkedin.com/in/jigar-sable"
                className="fab fa-linkedin"
                aria-label="LinkedIn">
                {" "}
              </a>
              <a
                href="https://github.com/jigar-sable"
                className="fab fa-github"
                aria-label="GitHub">
                {" "}
              </a>
              <a
                href="mailto:jigarsable21@gmail.com"
                className="fas fa-envelope"
                aria-label="Mail">
                {" "}
              </a>
              <a
                href="https://twitter.com/jigar_sable"
                className="fab fa-twitter"
                aria-label="Twitter">
                {" "}
              </a>
              <a
                href="https://t.me/lifecode5"
                className="fab fa-telegram-plane"
                aria-label="Telegram">
                {" "}
              </a>
            </div> */}
          </div>
        </div>
        <h1 className="credit">
          Designed with{" "}
          <span role="img" aria-label=" ">
            ❤️
          </span>{" "}
          by <a href="https://www.linkedin.com/in/jigar-sable">Dhrumil P.</a>
        </h1>
      </section>
    </>
  );
}

export default Footer;
