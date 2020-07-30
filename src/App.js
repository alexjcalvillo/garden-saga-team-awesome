import React from 'react';
import Garden from './components/Garden/Garden';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import SinglePlant from './components/SinglePlant/SinglePlant';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your garden!</h1>
      </header>
      <Switch>
        <Route exact path="/:id" component={SinglePlant} />
      </Switch>
      <Garden />
    </div>
  </Router>
);

export default App;
