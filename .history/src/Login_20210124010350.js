import React from "react";
import "./Login.css";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
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
        <br />
        <IconButton>
          <SendIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default Login;
