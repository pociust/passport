import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "../Components/Form";
import "../Styles/home.css";
import Strength from "../Components/Strength";
import API from "../Utils/API"


const Home = () => {
  const [state, setState] = useState('');

  const submitUserInfoAPI = (user) => {
    API.createUser(user)
      .then(console.log('useradded'))
      .catch(err => console.log(err))


  }


  const formInput = (event) => {
    event.preventDefault();
    let newUser = {
      userName: event.target.userName.value,
      password: event.target.password.value
    }

    submitUserInfoAPI(newUser);

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