import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { Boombox } from "./components/Boombox";
import { TV } from "./components/TV";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Boombox</Link>
              </li>
              <li>
                <Link to="/tv">TV</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/tv">
              <TV />
            </Route>
            <Route path="/">
              <Boombox />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
