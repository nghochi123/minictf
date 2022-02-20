
// Map for (1,5)

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
        href="./1844d9e5b2307ca9f1b3e0cb6803ce5ebe013db7697c0267d3c11f94faec0b6c"
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
        href="./da0e89c6383cf5b697c5b3427c5a00b972d0b6dc85e2501cb28ac0d5bc014bca"
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
        href="./c4cb76dc1e76e0daaffc5cd502846bd975d739151fbaa4a61073734b7d13e457"
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
        href="./a6881229afe7669316773c2e22c6e2c2caea279d05a80e27ec68facb1b960292"
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
        <img src="/map/1,5.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            