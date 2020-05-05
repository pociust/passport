import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing"

function App() {



  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
