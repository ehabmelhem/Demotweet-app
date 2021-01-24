import React from "react";
import "./Login.css";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
const user = [{ username: "ehab", password: "123" }];
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
        <div className="login__div">
          <Button color="primary" className="btn">
            <SendIcon className="send__icon" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
