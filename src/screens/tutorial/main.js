import React from "react";
import { Route, Routes } from "react-router-dom";

import Tut1 from "./Tut1";
import Tut2 from "./Tut2";
import Tut3 from "./Tut3";
import Tut4 from "./Tut4";
import Tut5 from "./Tut5";
import Tut6 from "./Tut6";
import Tut7 from "./Tut7";

export default function TutorialMain() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <Routes>
        <Route path={`/firstpart`} element={<Tut1 />} />
        <Route path={`/r0undtw0`} element={<Tut2 />} />
        <Route path={`/h1dd3nt3xt`} element={<Tut3 />} />
        <Route path={`/st34lth`} element={<Tut4 />} />
        <Route path={`/p3p34lyf`} element={<Tut5 />} />
        <Route path={`/deeznuts`} element={<Tut6 />} />
        <Route path={`/rotatethirteen`} element={<Tut7 />} />
      </Routes>
    </div>
  );
}
