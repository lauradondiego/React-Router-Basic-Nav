import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation, BrowserRouter } from "./components";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default App;
