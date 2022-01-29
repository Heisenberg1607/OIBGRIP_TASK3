import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Resume.css";

function Education() {
  return (
    <>
      <div  id="EDU" className="education mb-5">
        <h4 className="mb-5">Education</h4>
        <div className="d-flex edu-card">
          <div className="vertical-line"></div>
          <div className="year ">2018</div>
          <div className=" ">
            <h5 className="pb-3">Abhinav Education Society</h5>
            <h6>Programming</h6>
            <p style={{ color: "gray" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              aliquid odio numquam inventore deserunt vitae.
            </p>
            <hr
              style={{
                backgroundColor: "dodgerblue",
                position: "relative",
                left: "-2.9rem",
                marginTop: "20px",
              }}
            />
          </div>
        </div>
        <div className="d-flex edu-card">
          <div className="vertical-line"></div>
          <div className="year ">2021</div>
          <div className=" ">
            <h5 className="pb-3">JSPM Narhe Technical Campus</h5>
            <h6>Web development</h6>
            <p style={{ color: "gray" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              aliquid odio numquam inventore deserunt vitae.
            </p>
            <hr
              style={{
                backgroundColor: "dodgerblue",
                position: "relative",
                left: "-2.9rem",
                marginTop: "20px",
              }}
            />
          </div>
        </div>
        <div className="d-flex edu-card">
          <div className="vertical-line"></div>
          <div className="year ">2018</div>
          <div className=" ">
            <h5 className="pb-3">Abhinav Education Society</h5>
            <h6>Programming</h6>
            <p style={{ color: "gray" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              aliquid odio numquam inventore deserunt vitae.
            </p>
            <hr
              style={{
                backgroundColor: "dodgerblue",
                position: "relative",
                left: "-2.9rem",
                marginTop: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
