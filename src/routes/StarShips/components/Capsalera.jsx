import React from "react";
import { Link } from "react-router-dom";

// Capçalera de la pagina web
const Capsalera = () => {
  return (
    <header className="App-header">
      <div className="btn-group">
        <Link to="/" className="btn btn-primary">
          Inici
        </Link>
        <Link to="/naus" className="btn btn-warning">
          Naus
        </Link>
        <Link to="/about" className="btn btn-info">
          About
        </Link>
      </div>
      <div>
        <img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png" alt="Cap" />
      </div>
    </header>
  );
};

export default Capsalera;
