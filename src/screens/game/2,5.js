
// Map for (2,5)

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
        href="./c5620637b414f9ee28f9276290f23687047abd02696185fd4253061a16a3847c"
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
        href="./a4a36aa85bae181263894423377d7ec54fa027f92efcbbbf0474b026662f5de9"
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
        href="./308d7bd2536b433ae2ec880ede725c0923ce3f80cf37dc99194037bec6102e76"
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
        href="./f4ac9a678a76dbc35b0d540b0a398e3a931e31cea7646b512337f99fff0dc3fb"
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
        <img src="/map/2,5.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            