import React from "react";

const Form = (props) => {
  return (
    <>
      <form className="home-form" id="homeForm">
        <input type="text" placeholder="name"></input>
        <input type="password" placeholder="password" onChange={props.formInput}></input>
      </form>

    </>
  )
}

export default Form;