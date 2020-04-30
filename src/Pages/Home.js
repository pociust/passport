import React, { useState } from "react";
import Form from "../Components/Form"
import "../Styles/home.css"
import Strength from "../Components/Strength";


const Home = () => {
  const [state, setState] = useState('');

  const formInput = event => {
    event.preventDefault();
    console.log('1111', event.target.value.length)
  }

  return (
    <div className="frow-container p-10">
      <div>{state}</div>
      <Form formInput={formInput}></Form>
      <Strength></Strength>

    </div>
  )
}


export default Home;