
// Map for (3,4)

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
        href="./308d7bd2536b433ae2ec880ede725c0923ce3f80cf37dc99194037bec6102e76"
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
        href="./c1ef461e1a44abbc733181c22e93ef12d8954656d5412e5eef1de00202ee9a33"
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
        href="./d524785fe8b567ead9fb1a7de90b248bcbf33d0f6ceac04d08f374460e5207da"
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
        href="./a4a36aa85bae181263894423377d7ec54fa027f92efcbbbf0474b026662f5de9"
      >
        East
      </a>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <img src="/map/3,4.png" alt="map" height="300" />
      </div>
    </div>
  );
}       
            