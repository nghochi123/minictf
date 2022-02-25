
// Map for (4,2)

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
        href="./cd51a5c8d2edb16b6a917fcf7f4911dc1c42fb744ab212625a7c0323c0bc3e98"
      >
        North
      </a>
      
      <a
        style={{
          position: "absolute",
          top: "50%",
          left: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}
        href="./3e120492c7ba10862063c932cf4b7793fef7c7bd10895ec1b16be40564824431"
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
        href="./5854db683cdf2601f9e2afffb97140fec2d34f299215246acc1dd6ef247cdd0d"
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
        <img src="/map/4,2.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            