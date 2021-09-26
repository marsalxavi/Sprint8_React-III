import React from "react";
import { MenuLateral } from "./MenuLateral";

import { Ship } from "./Ships";
import { Ship01Text, Ship01Img } from "./Ships";
import { Ship02Text, Ship02Img } from "./Ships";
import { Ship03Text, Ship03Img } from "./Ships";
import { Ship04Text, Ship04Img } from "./Ships";

export const BodySection2 = () => {
  return (
    <div>
      <section className="ftco-section ftco-services ftco-no-pt">
        <div className="container-fluid">
          <div className="row">
            {/* Menu Lateral */}
            <div className="col-md-2">
              <MenuLateral />
            </div>

            {/* Primera fila */}
            <div className="col-md-5 d-flex align-self-stretch ftco-animate">
              {Ship("Ship01", Ship01Text, Ship01Img)}
            </div>
            <div className="col-md-5 d-flex align-self-stretch ftco-animate">
              {Ship("Ship02", Ship02Text, Ship02Img)}
            </div>

            {/* Segona fila */}
            <div className="col-md-2"></div>
            <div className="col-md-5 d-flex align-self-stretch ftco-animate">
              {Ship("Ship03", Ship03Text, Ship03Img)}
            </div>
            <div className="col-md-5 d-flex align-self-stretch ftco-animate">
              {Ship("Ship04", Ship04Text, Ship04Img)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
