import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import "./Resume.css"

function Skills() {
  return (
    <>
      <div className="skills pb-5">
        <h4 className="mb-5">
          My <span>Skills</span>{" "}
        </h4>
        <div className="skill-bars">
          <Row>
            <Col md={6}>
              <span>Html</span>
              <ProgressBar
                className="mb-3 mt-2"
                style={{ height: "0.55rem" }}
                now={80}
              />
              <span>Css</span>
              <ProgressBar
                className="mb-3 mt-2"
                style={{ height: "0.55rem" }}
                now={60}
              />
              <span>Javascript</span>
              <ProgressBar
                className="mb-3 mt-2"
                style={{ height: "0.55rem" }}
                now={50}
              />
              <span>React-Js</span>
              <ProgressBar
                className="mb-3 mt-2"
                style={{ height: "0.55rem" }}
                now={70}
              />
            </Col>
            <Col md={6}>
              <span>Objective C</span>
              <ProgressBar
                className="mb-3 mt-2"
                style={{ height: "0.55rem" }}
                now={60}
              />
              <span>C++</span>
              <ProgressBar
                className="mb-3 mt-2"
                style={{ height: "0.55rem" }}
                now={70}
              />
              <span>Python</span>
              <ProgressBar
                className="mb-3 mt-2"
                style={{ height: "0.55rem" }}
                now={90}
              />
              <span>Unity C#</span>
              <ProgressBar
                className="mb-3 mt-2"
                style={{ height: "0.55rem" }}
                now={20}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Skills;
