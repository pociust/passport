import React from "react";

const Form = (props) => {
  return (
    <>
      <form className="home-form" id="homeForm" onSubmit={props.formInput}>
        <input type="text" placeholder="name" name="userName"></input>
        <input type="password" placeholder="password" name="password" onChange={props.passwordStrength}></input>
        <button type="submit"> Submit</button>
      </form>

    </>
  )
}

export default Form;