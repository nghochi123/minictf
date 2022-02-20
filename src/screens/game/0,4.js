
// Map for (0,4)

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
        href="./48f0711339517fa836e6036f50728360200019fce7df31204c87107443d3bd49"
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
        href="./c4cb76dc1e76e0daaffc5cd502846bd975d739151fbaa4a61073734b7d13e457"
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
        href="./7a5fda9a307e8871cbf2de85874d66342eff72165abc2581f586b3f1dbfa0604"
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
        href="./1844d9e5b2307ca9f1b3e0cb6803ce5ebe013db7697c0267d3c11f94faec0b6c"
      >
        East
      </a>
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <img src="/map/0,4.png" alt="map" height="300" />
      </div>
    </div>
  );
}       
            