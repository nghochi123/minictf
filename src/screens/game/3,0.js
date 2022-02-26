
// Map for (3,0)

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
        href="./c1e75495ca446296f02b7b450cce457a190d1941fe2a2a2b9ba23df61a26f6cb"
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
        href="./4061ba4cbd276982071cbb15f034bc28590da4738165c855cafe5dca3f92da34"
      >
        South
      </a>
      <a
        style={{
          position: "absolute",
          top: "50%",
          right: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}
        href="./1432157ca9f965c66671df850fc07478ea658a5297a88fca65fe6195b6ac71bf"
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
        <img src="/map/3,0.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            