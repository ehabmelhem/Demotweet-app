import React, { useState } from "react";
import "./Login.css";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
const user = [
  { username: "ehab", password: "123" },
  { username: "abc", password: "13" },
  { username: "abcd", password: "12" },
  { username: "efg", password: "1234" },
];
function Login() {
  const [good, setGood] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const checkHandler = () => {};
  return (
    <div className="login">
      <label>{good ? "true" : "false"}</label>
      <form className="flex">
        <label>UserName: </label>
        <input type="text" />
        <br />
        <br />
        <label>Password: </label>
        <input
          onChange={(e) => {
            setPass(e.target.value);
          }}
          className="pass"
          type="text"
        />
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
