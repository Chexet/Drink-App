import React from 'react';
import './App.scss';

import { Switch, Route, Link } from 'react-router-dom';

import HomePage from '../src/Pages/HomePage/HomePage';
import ExplorePage from '../src/Pages/ExplorePage/ExplorePage';
import DrinkPage from '../src/Pages/DrinkPage/DrinkPage';

function App() {
  return (
    <div className="App">
      <Link to="/"><p>Home</p></Link>
      <Link to="/explore"><p>Explore</p></Link>

      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/explore" component={ ExplorePage } />
        <Route exact path="/drink/:drink" component={ DrinkPage } />
      </Switch>
    </div>
  );
}

export default App;
