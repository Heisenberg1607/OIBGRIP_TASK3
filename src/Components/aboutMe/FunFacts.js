import React from "react";
import "./aboutMe.css";
function FunFacts() {
  return (
    <>
      <p
        style={{ padding: " 0 10rem", fontSize: "22px" }}
        className="pt-5  fact-heading"
      >
        Fun <span>Facts</span>
      </p>
      <div className="fun-facts">
        <div className="fact">
          <i class="fas fa-dragon"></i>
          <div>Gaming Enthusiast</div>
        </div>
        <div className="fact">
          <i class="fas fa-pepper-hot"></i>
          <div>Cooking </div>
        </div>
        <div className="fact">
          <i class="fas fa-hamburger"></i>
          <div>foody</div>
        </div>
        <div className="fact">
          <i class="fab fa-spotify"></i>
          <div>Hip Hop Fan</div>
        </div>
      </div>
    </>
  );
}

export default FunFacts;
