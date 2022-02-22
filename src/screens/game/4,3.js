
// Map for (4,3)

import React from "react";
import '../../App.css';

export default function TutorialMain() {
  return (
    <div>
      <a
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          fontSize: "1.5em",
          transform: "translate(-50%, 0)",
        }}
        href="./d524785fe8b567ead9fb1a7de90b248bcbf33d0f6ceac04d08f374460e5207da"
      >
        North
      </a>
      <a
        className="invisLink"
        href="./c16625ef37dd52d2e6ecc252a2d7c2564bd2513f726967dab80e90050337b3af"
      >
        South
      </a>
      <a
        style={{
          position: "absolute",
          top: "50%",
          left: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}
        href="./a638cf6290bc44c71498f4fef167b45985942ac0a367beb98131c122d7185db4"
      >
        West
      </a>
      <a
        style={{
          position: "absolute",
          top: "50%",
          right: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}
        href="./c1ef461e1a44abbc733181c22e93ef12d8954656d5412e5eef1de00202ee9a33"
      >
        East
      </a>
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          textAlign: "center",
          margin: "5px",
          border: "5px solid black",
        }}
      >
        <img src="/map/4,3.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            