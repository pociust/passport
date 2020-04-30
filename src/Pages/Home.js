import React, { useState } from "react";
import Form from "../Components/Form"
import "../Styles/home.css"


const Home = () => {
  const [state, setState] = useState('');

  const formInput = event => {
    event.preventDefault();
    console.log('1111', event.target.value)
  }

  return (
    <div className="frow-container p-10">
      <div>{state}</div>
      <Form formInput={formInput}></Form>

    </div>
  )
}


export default Home;