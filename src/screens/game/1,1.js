
// Map for (1,1)

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
        href="./8b12122a6833284482026d67cfa484c58fd0ff536fadc5db0bce9cef41ab990c"
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
        href="./de5132ef203a6c17569522ca06ec5f9c35ba445660aa522214656f1035269a34"
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
        href="./fe2267d9198219da887760a0f36389966c7c4d745613ecde9a4924d181059aec"
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
        href="./15bafed7aff5e5084fbbf7660d14156d447cbe1db316aa2857efb93de3cb77f8"
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
        <img src="/map/1,1.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            