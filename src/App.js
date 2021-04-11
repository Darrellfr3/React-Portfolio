import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Persona from "./pages/Persona";
import Quiz from "./pages/Quiz";
import QuizNode from "./pages/QuizNode";
import Nav from "./components/Nav";
import Tracker from "./pages/Tracker";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Persona" component={Persona} />
          <Route exact path="/Quiz" component={Quiz} />
          <Route exact path="/QuizNode" component={QuizNode} />
          <Route exact path="/Tracker" component={Tracker} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
