import React from "react";

import { BodyNavBar } from "./components/BodyNavBar";
import { BodySection1 } from "./components/BodySection11";
import { BodySection2 } from "./components/BodySection2";

export const HomeBody = () => {
  return (
    <div>
      {/* <HomeBodyInit /> */}

      {/* Barra Navagecio */}
      <BodyNavBar />

      {/* Capçalera del Body */}
      <BodySection1 />

      {/* Cos del Body */}
      <BodySection2 />

    </div>
  );
};
