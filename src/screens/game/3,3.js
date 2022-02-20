
// Map for (3,3)

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
        href="./be7cc5b081354059d0bd0a8f82d3d1c40b622e2c5618942b431ea4431eb12c87"
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
        href="./5854db683cdf2601f9e2afffb97140fec2d34f299215246acc1dd6ef247cdd0d"
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
        href="./cd51a5c8d2edb16b6a917fcf7f4911dc1c42fb744ab212625a7c0323c0bc3e98"
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
        href="./bd8cafd4e95ad8108b12e90682c3ae4c93e7ebaa3137ae5a12710da55cb3ca04"
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
        <img src="/map/3,3.png" alt="map" height="300" />
      </div>
    </div>
  );
}       
            