import React from "react";
import { Col, Row } from "react-bootstrap";
import "./contactpage.css";

function ContactPage() {
  return (
    <>
      <div id="contact" className="contactInfo">
        <div className="header">
          <h2 className="contact pb-1 pt-5 ">
            Contact<span>Me</span>
          </h2>
          <p className="sub_heading ">Get in Touch</p>
        </div>

        <div className="contactbody">
          <Row>
            <Col md={5}>
              <ul>
                <li>
                  <i class="fas fa-mobile-alt mobileicon"></i>
                  <p className="mobile_number">+91 9422202294</p>
                  <p className="mobile_num_para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                </li>
                <li>
                  <i class="fas fa-map-marker-alt mobileicon"></i>
                  <p className="mobile_number">Pune, Maharashtra</p>
                  <p className="mobile_num_para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                </li>
                <li>
                  <i class="fas fa-at mobileicon"></i>
                  <p className="mobile_number">atharva_ak12@yahoo.in</p>
                  <p className="mobile_num_para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                </li>
              </ul>
            </Col>

            <Col md={7}>
              <div className="input-section">
                <h3 className="input_heading ml-4" style={{ color: "white" }}>
                  How Can <span>I</span> help <span>You</span>?
                </h3>
                <Row className="mt-5">
                  <Col>
                    <div className="inputs">
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Full Name"
                      />
                      <input
                        type="email"
                        className="input-field"
                        placeholder="Email Address"
                      />
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Subject"
                      />
                      <button className="submit-button">Submit</button>
                    </div>
                  </Col>
                  <Col>
                    <textarea
                      type="textarea"
                      placeholder="your messege goes here..."
                      className="input-field "
                      id=""
                      style={{ width: "20rem", height: "13rem" }}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="last-part">
          <hr />
          <div className="social">
            <ul className="sites">
              <a href="https://www.linkedin.com/in/atharva-kurumbhatte-a6a044205/">
                LinkedIn
              </a>
              <a href="https://github.com/Heisenberg1607">Github</a>
              <a href="https://www.instagram.com/atharva_kurumbhatte/">
                Instagram
              </a>
            </ul>
            <p> &#169; 2021 all rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
