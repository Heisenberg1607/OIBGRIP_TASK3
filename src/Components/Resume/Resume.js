import React from "react";
import { Col, Row } from "react-bootstrap";
import Education from "./Education";
import ResumeLeft from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "./Resume.css"

function Resume() {
  return (
    <>
      <div className="Resume" style={{ padding: "0 10rem" }}>
        <h2 className="pb-2 pt-5">
          Resu<span>me</span>
        </h2>
        <Row>
          <Col md={6}>
            <Education />
          </Col>
          <Col md={6}>
            <Experience />
          </Col>
              </Row>
              <Skills/>
      </div>
    </>
  );
}

export default Resume;
