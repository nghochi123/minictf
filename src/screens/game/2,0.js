
// Map for (2,0)

import React, { useState } from "react";

export default function TutorialMain() {
  const [message, setMessage] = useState('U2FsdGVkX1/sRYNjqP9sdjmhtvO0lIA1oD2xdMjG+yQ=');

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function decrypt(key1, key2, key3) {
    console.log(key1);
    if (key1 === "anders" && key2 === "very" && key3 === "upz") {
      setMessage("eleven");
    } else {
      setMessage("Wrong Answer!");
      await sleep(3000);
      setMessage('U2FsdGVkX1/sRYNjqP9sdjmhtvO0lIA1oD2xdMjG+yQ=');
    }
  }

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
        href="./fe2267d9198219da887760a0f36389966c7c4d745613ecde9a4924d181059aec"
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
        href="./399750c93c74ec8d379690f9c974a5d69aa3a0ec56c4d582315d77c964849c33"
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
        href="./de5132ef203a6c17569522ca06ec5f9c35ba445660aa522214656f1035269a34"
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
        <img src="/map/2,0.png" alt="map" height="30%" />
      </div>

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          width: "70vh",
          transform: "translate(-50%, 0)",
        }}
      >
        <p 
          style={{
            textAlign: "center", 
            border: "5px solid black", 
            padding: "5px"
          }}
        >
          {message}
        </p>

        <div style={{width: "100%", whiteSpace: "nowrap",}}>
          <input type="text" id="key1" name="fname" placeholder="Key 1" style={{width: "25%", display: "inline-block", marginRight: "15px"}}/>
          <input type="text" id="key2" name="fname" placeholder="Key 2" style={{width: "25%", display: "inline-block", marginRight: "15px"}}/>
          <input type="text" id="key3" name="fname" placeholder="Key 3" style={{width: "25%", display: "inline-block", marginRight: "15px"}}/>
        </div>

        <button 
          onClick={() => decrypt(
            document.getElementById("key1").value, 
            document.getElementById("key2").value, 
            document.getElementById("key3").value
          )}
          style={{marginTop: "20px"}}
        >Insert the keys
        </button>
      </div>

      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          width: "70vh",
          transform: "translate(-30%, 0)",
          // justifyItems: "center",
          // display: "flex",
        }}
      >
        <img 
          src="/game/hidden-map.png" 
          alt="map"
          style={{height: "50vh", display: "absolute"}}
        />
      </div>
    </div>
  );
}       
            