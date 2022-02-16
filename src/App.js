import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "react-jsx-html-comments";
import Moveable from "react-moveable";
import "./App.css";

import TutorialMain from "./screens/tutorial/main";
import GameMain from "./screens/game/main";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./Resources", false, /\.(png|jpe?g|svg)$/)
);
const qr = importAll(
  require.context("./Resources/qr-codes", false, /\.(png|jpe?g|svg)$/)
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tutorial/*" element={<TutorialMain />} />
        <Route path="/game/*" element={<GameMain />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"
          element={<Admin />}
        />
        <Route path="/manual" element={<Manual />} />
        <Route path="/nu1gtkij2tfANGut3GqCN" element={<Mission />} />
        <Route
          path="/6cbf40494f64db7248d7d4d7737f772d6f80941cb93389b49d4321487328acb8"
          element={<Qrcode />}
        />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Please login to do anything else</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  const actUser = "james";
  const actPass = "sup3rh4x0r";
  const onSubmit = (e) => {
    e.preventDefault();
    if (user === actUser && password === actPass) {
      navigate(
        "/8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"
      );
    } else {
      setWrong(true);
    }
  };

  return (
    <div class="pageContainer">
      <h2>Login</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <label for="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{wrong ? "Your password is incorrect, please try again." : ""}</p>
      <div>
        <p class="hide">
          Right Click -{">"} Inspect to uncover the username and password!
        </p>
      </div>
      <p class="footer">2</p>
      <react-comment>
        James, since you have forgotten your password AGAIN, I have updated your
        password: Now your username is james and your password is sup3rh4x0r.
        Please reset it once you enter, and remember to delete this comment.
      </react-comment>
    </div>
  );
}

function Admin() {
  var link = <a href="../manual">/manual</a>;
  return (
    <div class="pageContainer">
      <h1>Admin page</h1>
      <p>
        Welcome to the super secret admin page. If you are here, you must be
        James. Please access {link} to see your next task.
      </p>
      <p class="footer">3</p>
    </div>
  );
}

function Manual() {
  return (
    <div class="pageContainer">
      <h1>Manual page</h1>
      <p style={{ display: "flex" }}>
        Hello Agent James, your task is hidden inside these 3 manuals to keep it
        hidden from foreign spies. The numbers will guide your way. Good luck
        and god speed.
      </p>
      <div class="verticalContainer">
        <img src={images["hidden.jpg"]} alt="hidden" class="image" />
        <p class="hide">Open this image with notepad!</p>
      </div>
      <div class="verticalContainer">
        <img src={images["manual_meta.jpg"]} alt="meta" class="image" />
        <p class="hide">
          Right click -{">"} properties -{">"} details!
        </p>
      </div>
      <div class="verticalContainer">
        <img src={images["manual_gamma.jpg"]} alt="gamma" class="image" />
        <p class="hide">
          https://pinetools.com/adjust-gamma-image -{">"} adjust gamma levels!
        </p>
      </div>
      <p class="footer" style={{ position: "relative" }}>
        5
      </p>
    </div>
  );
}

function Mission() {
  /* path = nu1gtkij2tfANGut3GqCN */
  const navigate = useNavigate();
  const styles = {
    margin: "10px",
  };

  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);
  const [button6, setButton6] = useState(false);
  const [button7, setButton7] = useState(false);
  const [button8, setButton8] = useState(false);
  const [button9, setButton9] = useState(false);
  const [wrong, setWrong] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !button1 &&
      button2 &&
      button3 &&
      !button4 &&
      button5 &&
      !button6 &&
      !button7 &&
      !button8 &&
      button9
    ) {
      navigate(
        "../6cbf40494f64db7248d7d4d7737f772d6f80941cb93389b49d4321487328acb8"
      );
    } else {
      setWrong(true);
    }
  };

  return (
    <div class="pageContainer">
      <p>Enter a 4 digit passcode</p>
      <button
        name="button1"
        onClick={() => setButton1((button1) => !button1)}
        style={{ ...styles, backgroundColor: button1 ? "green" : "white" }}
      >
        1
      </button>
      <button
        name="button2"
        onClick={() => setButton2((button2) => !button2)}
        style={{ ...styles, backgroundColor: button2 ? "green" : "white" }}
      >
        2
      </button>
      <button
        name="button3"
        onClick={() => setButton3((button3) => !button3)}
        style={{ ...styles, backgroundColor: button3 ? "green" : "white" }}
      >
        3
      </button>
      <br />
      <button
        name="button4"
        onClick={() => setButton4((button4) => !button4)}
        style={{ ...styles, backgroundColor: button4 ? "green" : "white" }}
      >
        4
      </button>
      <button
        name="button5"
        onClick={() => setButton5((button5) => !button5)}
        style={{ ...styles, backgroundColor: button5 ? "green" : "white" }}
      >
        5
      </button>
      <button
        name="button6"
        onClick={() => setButton6((button6) => !button6)}
        style={{ ...styles, backgroundColor: button6 ? "green" : "white" }}
      >
        6
      </button>
      <br />
      <button
        name="button7"
        onClick={() => setButton7((button7) => !button7)}
        style={{ ...styles, backgroundColor: button7 ? "green" : "white" }}
      >
        7
      </button>
      <button
        name="button8"
        onClick={() => setButton8((button8) => !button8)}
        style={{ ...styles, backgroundColor: button8 ? "green" : "white" }}
      >
        8
      </button>
      <button
        name="button9"
        onClick={() => setButton9((button9) => !button9)}
        style={{ ...styles, backgroundColor: button9 ? "green" : "white" }}
      >
        9
      </button>
      <br />
      <button style={styles} name="submit" onClick={(e) => onSubmit(e)}>
        Submit
      </button>
      <p style={styles}>{wrong ? "Incorrect Passcode! Try again" : ""}</p>
      <p class="footer">9</p>
    </div>
  );
}

function Qrcode() {
  return (
    <Moveable
      target={qr["1.png"]}
      container={null}
      origin={true}
      /* Resize event edges */
      edge={true}
      /* draggable */
      draggable={true}
      throttleDrag={0}
      onDragStart={({ target, clientX, clientY }) => {
        console.log("onDragStart", target);
      }}
      onDrag={({
        target,
        beforeDelta,
        beforeDist,
        left,
        top,
        right,
        bottom,
        delta,
        dist,
        transform,
        clientX,
        clientY,
      }) => {
        console.log("onDrag left, top", left, top);
        // target!.style.left = `${left}px`;
        // target!.style.top = `${top}px`;
        console.log("onDrag translate", dist);
        target.style.transform = transform;
      }}
      onDragEnd={({ target, isDrag, clientX, clientY }) => {
        console.log("onDragEnd", target, isDrag);
      }}
      /* When resize or scale, keeps a ratio of the width, height. */
      keepRatio={true}
      /* resizable*/
      /* Only one of resizable, scalable, warpable can be used. */
      resizable={true}
      throttleResize={0}
      onResizeStart={({ target, clientX, clientY }) => {
        console.log("onResizeStart", target);
      }}
      onResize={({
        target,
        width,
        height,
        dist,
        delta,
        direction,
        clientX,
        clientY,
      }) => {
        console.log("onResize", target);
        delta[0] && (target.style.width = `${width}px`);
        delta[1] && (target.style.height = `${height}px`);
      }}
      onResizeEnd={({ target, isDrag, clientX, clientY }) => {
        console.log("onResizeEnd", target, isDrag);
      }}
      // Enabling pinchable lets you use events that
      // can be used in draggable, resizable, scalable, and rotateable.
      pinchable={true}
      onPinchStart={({ target, clientX, clientY, datas }) => {
        // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
        console.log("onPinchStart");
      }}
      onPinch={({ target, clientX, clientY, datas }) => {
        // pinch event occur before drag, rotate, scale, resize
        console.log("onPinch");
      }}
      onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
        // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
        console.log("onPinchEnd");
      }}
    />
  );
}
