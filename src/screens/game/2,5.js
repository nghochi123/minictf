
// Map for (2,5)

import React, { useState } from "react";
import "react-jsx-html-comments";

const gems = ['pearl', 'sapphire', 'diamond', 'emerald', 'ruby'];
const correct = gems[Math.floor(Math.random() * gems.length)];
// console.log(correct);
const alphabet = [
  'A','B','C','D','E','F',
  'G','H','I','J','K','L',
  'M','N','O','P','Q','R',
  'S','T','U','V','W','X',
  'Y','Z'
];
const hint = 'THEGEMIS'.concat(correct.toUpperCase())
var encryptedHint = '13'
const shift = 13;

// console.log(hint);

for (var i = 0; i < hint.length; i++) {
  encryptedHint += alphabet[(alphabet.indexOf(hint[i]) + shift) % 26]
}

// console.log(encryptedHint);

export default function TutorialMain() {
  
  const [message, setMessage] = useState('You find a familiar looking locked chest in the mines. There is a empty gem socket on it. Looking around, you find a small hill of jewels of various colours. But which one to insert?');

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function correctGem(gem) {
    if (gem === correct) {
      setMessage("After unlocking the treasure, you find a piece of paper with a single word on it: upz");
    } else {
      setMessage("The chest stays stubbonly shut. A white mist suddenly fills the room, making you feel lightheaded. Resetting...");
      await sleep(2000);
      window.location.reload();
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
        <p style={{width: "100%"}}>
          {message}
        </p>
        <img 
          src="/game/chest.jpg" 
          alt="map"
          style={{height: "50vh", display: "absolute"}}
        />
        <div style={{width: "100%", whiteSpace: "nowrap",}}>
          <img 
            src="/game/gems/pearl.jpg" 
            alt="opal" 
            style={{width: "10%", height: "10%", display: "inline-block", marginRight: "15px"}}
            onClick={() => correctGem('opal')}
          />
          <img 
            src="/game/gems/emerald.jpg" 
            alt="opal" 
            style={{width: "10%", height: "10%", display: "inline-block", marginRight: "15px"}}
            onClick={() => correctGem('emerald')}
          />
          <img 
            src="/game/gems/ruby.jpg" 
            alt="opal" 
            style={{width: "10%", height: "10%", display: "inline-block", marginRight: "15px"}}
            onClick={() => correctGem('ruby')}
          />
          <img 
            src="/game/gems/sapphire.jpg" 
            alt="opal" 
            style={{width: "10%", height: "10%", display: "inline-block", marginRight: "15px"}}
            onClick={() => correctGem('sapphire')}
          />
          <img 
            src="/game/gems/diamond.png" 
            alt="opal" 
            style={{width: "10%", height: "10%", display: "inline-block", marginRight: "15px"}}
            onClick={() => correctGem('diamond')}
          />
        </div>
      </div>
      <react-comment>{encryptedHint}</react-comment>
    </div>
  );
}       
            