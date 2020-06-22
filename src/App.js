import React from 'react';
import './App.scss';

import { Switch, Route, Link } from 'react-router-dom';

import ExplorePage from '../src/Pages/ExplorePage/ExplorePage';
import HomePage from '../src/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Link to="/"><p>Home</p></Link>
      <Link to="/explore"><p>Explore</p></Link>

      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/explore" component={ ExplorePage } />
      </Switch>
    </div>
  );
}

export default App;
