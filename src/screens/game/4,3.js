
// Map for (4,3)

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
        href="./d524785fe8b567ead9fb1a7de90b248bcbf33d0f6ceac04d08f374460e5207da"
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
        href="./2f4c865bbc7c8cdb8544a8c25da32965cbfcd5fb4c7d0b278132c4f898bad38f"
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
        }}
      >
        <img src="/map/4,3.png" alt="map" height="300" />
      </div>
    </div>
  );
}       
            