import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import JobDetail from "./views/JobDetail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/jobs/:id" component={JobDetail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
