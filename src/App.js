import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation, BrowserRouter } from "./components";
import { Route, Switch, Link } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/kitten/:count" component={() => <Kitten count={3} />} /> */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* <Route path="/kitten/" component={Kitten} /> */}
    </Switch>
  </div>
);

export default App;
