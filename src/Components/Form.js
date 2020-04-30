import React from "react";

const Form = (props) => {
  return (
    <>
      <form className="home-form" id="homeForm" onChange={props.formInput}>
        <input type="text" placeholder="name"></input>
        <input type="password" placeholder="password"></input>
      </form>

    </>
  )
}

export default Form;