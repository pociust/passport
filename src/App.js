import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing"

function App() {

  // const loginRedirect = () => {
  //   console.log("login")
  //   return (
  //     <Redirect to='/home' />)
  // }

  // const signInRedirect = () => {
  //   console.log("sign in ")
  //   return (
  //     <Redirect to='/signin' />)
  // }


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
          <Route exact path="/signin">
            <SignIn></SignIn>
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
