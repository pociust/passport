import React from "react";
import {NavLink} from "react-router-dom"
import Form from '../Components/Form'


const Login = () => {

  return (
    <div className="frow-container p-10">
      <Form></Form>
      <NavLink to="/signup">Create an account</NavLink>
    </div>
  )
}

export default Login;