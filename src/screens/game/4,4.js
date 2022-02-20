
// Map for (4,4)

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
        href="./game/bd8cafd4e95ad8108b12e90682c3ae4c93e7ebaa3137ae5a12710da55cb3ca04"
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
        href="./game/76464416e991444913fda51d0893b88c89269bfc2e16444a9a332c3bac2f8fe9"
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
        href="./game/5854db683cdf2601f9e2afffb97140fec2d34f299215246acc1dd6ef247cdd0d"
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
        href="./game/0102a778bdf45eac8270c9eda194419be4435645aa6cd0dffe584a1850a3f09c"
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
        <img src="/map/4,4.png" alt="map" height="300" />
      </div>
    </div>
  );
}       
            