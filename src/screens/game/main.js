import React from "react";
import { Route, Routes } from "react-router-dom";

// import GameMap00 from "./0,0";
import GameMap10 from "./1,0";
import GameMap20 from "./2,0";
import GameMap30 from "./3,0";
import GameMap40 from "./4,0";
import GameMap01 from "./0,1";
import GameMap11 from "./1,1";
import GameMap21 from "./2,1";
import GameMap31 from "./3,1";
import GameMap41 from "./4,1";
import GameMap02 from "./0,2";
import GameMap12 from "./1,2";
import GameMap22 from "./2,2";
import GameMap32 from "./3,2";
import GameMap42 from "./4,2";
import GameMap03 from "./0,3";
import GameMap13 from "./1,3";
import GameMap23 from "./2,3";
import GameMap33 from "./3,3";
import GameMap43 from "./4,3";
import GameMap04 from "./0,4";
import GameMap14 from "./1,4";
import GameMap24 from "./2,4";
import GameMap34 from "./3,4";
import GameMap44 from "./4,4";
import GameMap05 from "./0,5";
import GameMap15 from "./1,5";
import GameMap25 from "./2,5";
import GameMap35 from "./3,5";
import GameMap45 from "./4,5";
import Missing from "./Missing";

export default function GameMain() {
  return (
    <div>
      <Routes>
        {/* <Route
          path={`/178e450bf3726515417cea82ea10b5bc36540c49a66f460c4f847d9c39de037b`}
          element={<GameMap00 />}
        /> */}
        <Route
          path={`/fe2267d9198219da887760a0f36389966c7c4d745613ecde9a4924d181059aec`}
          element={<GameMap10 />}
        />
        <Route
          path={`/c1e75495ca446296f02b7b450cce457a190d1941fe2a2a2b9ba23df61a26f6cb`}
          element={<GameMap20 />}
        />
        <Route
          path={`/399750c93c74ec8d379690f9c974a5d69aa3a0ec56c4d582315d77c964849c33`}
          element={<GameMap30 />}
        />
        <Route
          path={`/4061ba4cbd276982071cbb15f034bc28590da4738165c855cafe5dca3f92da34`}
          element={<GameMap40 />}
        />
        <Route
          path={`/8b12122a6833284482026d67cfa484c58fd0ff536fadc5db0bce9cef41ab990c`}
          element={<GameMap01 />}
        />
        <Route
          path={`/44a4fb7a5de1e98d6ceafbeab1d6358f52d7649bea27b1ba29f531c3e8f2ac46`}
          element={<GameMap11 />}
        />
        <Route
          path={`/de5132ef203a6c17569522ca06ec5f9c35ba445660aa522214656f1035269a34`}
          element={<GameMap21 />}
        />
        <Route
          path={`/1432157ca9f965c66671df850fc07478ea658a5297a88fca65fe6195b6ac71bf`}
          element={<GameMap31 />}
        />
        <Route
          path={`/3e120492c7ba10862063c932cf4b7793fef7c7bd10895ec1b16be40564824431`}
          element={<GameMap41 />}
        />
        <Route
          path={`/14136a2a13125ae9aa5ff017e657a0e8ea00af064a8de5fadf105c21136045e5`}
          element={<GameMap02 />}
        />
        <Route
          path={`/15bafed7aff5e5084fbbf7660d14156d447cbe1db316aa2857efb93de3cb77f8`}
          element={<GameMap12 />}
        />
        <Route
          path={`/44dc07ddb13fb0e633c7837e5050322c0f3a5e153b2bcb81780afdb7b2067a67`}
          element={<GameMap22 />}
        />
        <Route
          path={`/cd51a5c8d2edb16b6a917fcf7f4911dc1c42fb744ab212625a7c0323c0bc3e98`}
          element={<GameMap32 />}
        />
        <Route
          path={`/a638cf6290bc44c71498f4fef167b45985942ac0a367beb98131c122d7185db4`}
          element={<GameMap42 />}
        />
        <Route
          path={`/7a5fda9a307e8871cbf2de85874d66342eff72165abc2581f586b3f1dbfa0604`}
          element={<GameMap03 />}
        />
        <Route
          path={`/c9f18ad656657e24402c8e968a43bec1b01ca56731425f8b4426d622d9dc5dfa`}
          element={<GameMap13 />}
        />
        <Route
          path={`/be7cc5b081354059d0bd0a8f82d3d1c40b622e2c5618942b431ea4431eb12c87`}
          element={<GameMap23 />}
        />
        <Route
          path={`/d524785fe8b567ead9fb1a7de90b248bcbf33d0f6ceac04d08f374460e5207da`}
          element={<GameMap33 />}
        />
        <Route
          path={`/5854db683cdf2601f9e2afffb97140fec2d34f299215246acc1dd6ef247cdd0d`}
          element={<GameMap43 />}
        />
        <Route
          path={`/4c6617b306ad9c78e25313ffa5ca203b97107c6afc90d6323aaa9c5b86ae2809`}
          element={<GameMap04 />}
        />
        <Route
          path={`/c4cb76dc1e76e0daaffc5cd502846bd975d739151fbaa4a61073734b7d13e457`}
          element={<GameMap14 />}
        />
        <Route
          path={`/308d7bd2536b433ae2ec880ede725c0923ce3f80cf37dc99194037bec6102e76`}
          element={<GameMap24 />}
        />
        <Route
          path={`/bd8cafd4e95ad8108b12e90682c3ae4c93e7ebaa3137ae5a12710da55cb3ca04`}
          element={<GameMap34 />}
        />
        <Route
          path={`/c1ef461e1a44abbc733181c22e93ef12d8954656d5412e5eef1de00202ee9a33`}
          element={<GameMap44 />}
        />
        <Route
          path={`/1844d9e5b2307ca9f1b3e0cb6803ce5ebe013db7697c0267d3c11f94faec0b6c`}
          element={<GameMap05 />}
        />
        <Route
          path={`/c5620637b414f9ee28f9276290f23687047abd02696185fd4253061a16a3847c`}
          element={<GameMap15 />}
        />
        <Route
          path={`/da0e89c6383cf5b697c5b3427c5a00b972d0b6dc85e2501cb28ac0d5bc014bca`}
          element={<GameMap25 />}
        />
        <Route
          path={`/a4a36aa85bae181263894423377d7ec54fa027f92efcbbbf0474b026662f5de9`}
          element={<GameMap35 />}
        />
        <Route
          path={`/0102a778bdf45eac8270c9eda194419be4435645aa6cd0dffe584a1850a3f09c`}
          element={<GameMap45 />}
        />
        <Route path={`/*`} element={<Missing />} />
      </Routes>
    </div>
  );
}
