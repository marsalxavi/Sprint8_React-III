import React, { Fragment } from "react";

import { OwlCarouselShips } from "./OwlCarouselShips.jsx";
import { ButonsLoginRegister } from "./ButonsLoginRegister.jsx";
import { Login } from "./Login.jsx";
import { Register } from "./Register.jsx";

import "./BodySection11.css";

const FontsExtra = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

const JumboWelcome = () => <h1>Welcome to STARWARS</h1>;

const JumboTitol = () => (
  <h2>
    Explore
    <br />
    the Galaxy !!!
  </h2>
);

const JumboText = () => <p>Discover some StarShips</p>;

const JumboFrame = () => {
  return (
    <div class="jumbo">
      <JumboWelcome />
      <JumboTitol />
      <JumboText />
    </div>
  );
};

export const BodySection1 = () => {
  return (
    <>
      <FontsExtra />
      <div className="CarouselImg">
        <OwlCarouselShips />
      </div>
      <div className="Jumbo">
        <JumboFrame />
        <Login />
        <Register />
        <ButonsLoginRegister />
      </div>
    </>
  );
};
