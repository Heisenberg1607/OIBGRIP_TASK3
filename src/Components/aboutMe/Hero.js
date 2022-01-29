import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Profile from "../../Profile.pdf";
import "./aboutMe.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <Row>
          <Col md={2}></Col>
          <Col md={3}>
            <div className="for-image">
              <Image
                className="picture"
                src={require("./portfolio_image.jpg").default}
                width={350}
                height={350}
                roundedCircle
              />
            </div>
          </Col>
          <Col md={5} className="profile-bio">
            <h5 className="text-muted mt-5 sub-heading">Web Designer</h5>
            <h1
              className="text-white mb-4 myName "
              style={{ fontWeight: "900" }}
            >
              Atharva Kurumbhatte
            </h1>
            <div className="myInfo">
              <p className="text-muted mb-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
                corporis numquam adipisci architecto ullam et velit voluptas
                omnis aliquam excepturi reiciendis nulla rem unde, ratione qui.
                Unde animi dolorem magnam.
              </p>
            </div>

            <div className="blue-btns">
              <a
                href={Profile}
                download="Hyperloop_Projects.pdf"
                className="hero-button mr-4 btn btn-primary"
              >
                Download CV
              </a>
              <Button className="hero-button" variant="outline-light">
                Contact
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Hero;
