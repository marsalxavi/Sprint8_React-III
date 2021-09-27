import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetWebPage from "../StarShips/components/GetWebPage.jsx";

export const NausPage = () => {
  const [PagNaus, setPagNaus] = useState([]);

  // const urlPage = new URL(`https://swapi.dev/api/starships/?page=1`);

  const PageNum = 1;
  const urlPageBase = new URL(`https://swapi.dev/api/starships/?page=`);
  const urlPage = new URL(`${urlPageBase}${PageNum}`);

  useEffect(() => {
    GetAryWebPage();
  }, [PageNum]);

  const GetAryWebPage = async () => {
    const AryWebPage = await GetWebPage(urlPage);
    setPagNaus(AryWebPage);
  };

  return (
    <div className="LlistatNaus">
      {PagNaus.map((item, index) => (
        <li key={index}>
          <Link to={`/naus/${item.name}`}>{item.name}</Link>
        </li>
      ))}
    </div>
  );
};
