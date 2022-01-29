import React from "react";
import Resume from "../Resume/Resume";
import "./aboutMe.css";
import ContactPage from "./ContactPage";
import Description from "./Description";
import FunFacts from "./FunFacts";
import Hero from "./Hero";


function AboutMe() {
  return (
    <>
      <Hero />

      <Description />
      <hr />
      <FunFacts />
      <Resume />
      <ContactPage />
    </>
  );
}

export default AboutMe;
