import React from "react";
import "./Login.css";
import SendIcon from "@material-ui/icons/Send";
function Login() {
  return (
    <div className="login">
      <form className="flex">
        <label>UserName: </label>
        <input type="text" />
        <br />
        <br />
        <label>Password: </label>
        <input className="pass" type="text" />
      </form>
    </div>
  );
}

export default Login;
