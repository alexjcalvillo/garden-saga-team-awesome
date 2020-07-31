import React from 'react';
import Garden from './components/Garden/Garden';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import SinglePlant from './components/SinglePlant/SinglePlant';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your garden!</h1>
      </header>

      <Route path="/plant/:id" render={(props) => <SinglePlant {...props} />} />

      <Route exact path="/" component={Garden} />
    </div>
  </Router>
);

export default App;
