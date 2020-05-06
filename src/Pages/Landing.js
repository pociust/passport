import React from "react";
import { NavLink } from 'react-router-dom';





const Landing = () => {


  return (
    <React.Fragment>
      <NavLink to="/signup">Sign In</NavLink>
      <NavLink to="/login">Login</NavLink>
    </React.Fragment>
  )
};

export default Landing;