
// Map for (1,3)

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
        href="./7a5fda9a307e8871cbf2de85874d66342eff72165abc2581f586b3f1dbfa0604"
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
        href="./be7cc5b081354059d0bd0a8f82d3d1c40b622e2c5618942b431ea4431eb12c87"
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
        href="./15bafed7aff5e5084fbbf7660d14156d447cbe1db316aa2857efb93de3cb77f8"
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
        href="./c4cb76dc1e76e0daaffc5cd502846bd975d739151fbaa4a61073734b7d13e457"
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
        <img src="/map/1,3.png" alt="map" height="300" />
      </div>
    </div>
  );
}       
            