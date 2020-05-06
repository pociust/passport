import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "../Components/Form";
import "../Styles/home.css";
import Strength from "../Components/Strength";


const Home = () => {
  const [state, setState] = useState('');

  const formInput = (event) => {
    event.preventDefault();
    console.log('22222', event.target.userName.value, event.target.password.value)
  }

  const passwordStrength = (event) => {
    event.preventDefault();
    console.log('1111', event.target.value)

  }

  return (
    <div className="frow-container p-10">
      <div>{state}</div>
      <Form formInput={formInput} passwordStrength={passwordStrength}></Form>
      <Strength></Strength>
      <NavLink to="/signup">Log In</NavLink>


    </div>
  )
}


export default Home;