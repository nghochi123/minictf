
// Map for (3,2)

import React from "react";

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
        href="./44dc07ddb13fb0e633c7837e5050322c0f3a5e153b2bcb81780afdb7b2067a67"
      >
        North
      </a>
      <a
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          fontSize: "1.5em",
          transform: "translate(-50%, 0)",
        }}
        href="./a638cf6290bc44c71498f4fef167b45985942ac0a367beb98131c122d7185db4"
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
        href="./1432157ca9f965c66671df850fc07478ea658a5297a88fca65fe6195b6ac71bf"
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
        href="./d524785fe8b567ead9fb1a7de90b248bcbf33d0f6ceac04d08f374460e5207da"
      >
        East
      </a>
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          textAlign: "center",
        }}
      >
        <img src="/map/3,2.png" alt="map" height="300" />
      </div>
    </div>
  );
}       
            