import React from "react";

export const ButonsLoginRegister = () => {
  return (
    <div style={{position:"relative", top:"-57.5em",zIndex:"2", textAlign:"center"}}>
      <p>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#myLogin"
        >
          Login
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-toggle="modal"
          data-target="#myRegister"
        >
          Register
        </button>
      </p>
    </div>
  );
};