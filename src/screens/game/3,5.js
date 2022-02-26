
// Map for (3,5)

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
        href="./da0e89c6383cf5b697c5b3427c5a00b972d0b6dc85e2501cb28ac0d5bc014bca"
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
        href="./0102a778bdf45eac8270c9eda194419be4435645aa6cd0dffe584a1850a3f09c"
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
        href="./bd8cafd4e95ad8108b12e90682c3ae4c93e7ebaa3137ae5a12710da55cb3ca04"
      >
        West
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
        <img src="/map/3,5.png" alt="map" height="30%" />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p style={{width: "100%"}}>The mines open into a vast ocean. Fortunately, there is a boat anchored to the shore.</p>
        <img 
          src="/backgrounds/mines.jpg" 
          alt="map"
          style={{height: "70vh", display: "absolute"}}
        />
      </div>
    </div>
  );
}       
            