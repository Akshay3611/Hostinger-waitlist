import React from "react";

function body() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src="..\Assets\Blue Shape.svg" alt="1st layer" className=""></img>
        <img
          src="..\Assets\Pink Shape.svg"
          alt="2nd layer"
          className="absolute"
        ></img>
        <img
          src="..\Assets\Purple Shape.svg"
          alt="3rd  layer"
          className="absolute"
        ></img>
        <img
          src="..\Assets\Hero Image (Model).png"
          alt="hero"
          className="absolute"
        ></img>
      </div>
      <div></div>
    </div>
  );
}

export default body;
