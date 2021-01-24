import React from "react";
import "./SignUp.css";
function SignUp() {
  return (
    <div className="signUp">
      <label>userName: </label>
      <input type="text" />
      <br />
      <br />
      <label>password:</label>
      <input className="pass" type="text" />
    </div>
  );
}

export default SignUp;
