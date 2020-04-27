import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route exact path ="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
