import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import { About } from './routes/About/About.jsx';
import { Home as StarWars} from './routes/StarWars/Home.jsx';

import { NauByName } from './routes/Naus/NauByName';
import { NausPage } from './routes/Naus/NausPage.jsx'
import { StarShips } from './routes/StarShips/StarShips.jsx'

function App() {
  return (
    <Router>
      <div className="menuBarTop">
        <div className="container mt-1">
          <div className="btn-group">
            <Link to="/" className="btn btn-primary">StarWars</Link>
            <Link to="/starships" className="btn btn-success">StarShips</Link>
            <Link to="/naus" className="btn btn-warning">SpaceCrafts</Link>
            <Link to="/about" className="btn btn-danger">About</Link>
          </div>
        </div>
      </div>
      <div id="router" style={{position:"relative"}}>
        <Switch>
          <Route path="/about"> <About /> </Route>
          <Route path="/naus/:NomNau"> <NauByName /> </Route>
          <Route path="/naus"> <NausPage /> </Route>
          <Route path="/starships"> <StarShips /> </Route>
          <Route path="/"> <StarWars /> </Route>
        </Switch>
      </div>
    </Router >
  )
}

export default App;