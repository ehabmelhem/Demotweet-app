import React, { useState } from "react";
import "./Login.css";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
const users = [
  { username: "ehab", password: "123" },
  { username: "abc", password: "13" },
  { username: "abcd", password: "12" },
  { username: "efg", password: "1234" },
];
function Login() {
  const [good, setGood] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  let flag = false;
  const checkHandler = () => {
    users.forEach((elm) => {
      if (elm.username === user && elm.password === pass) {
        flag = true;
      }
    });
  };
  return (
    <div className="login">
      <label>{good ? "true" : "false"}</label>
      <form className="flex">
        <label>UserName: </label>
        <input
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          type="text"
        />
        <br />
        <br />
        <label>Password: </label>
        <input
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          className="pass"
          type="text"
        />
        <br />
        <div className="login__div">
          <Button disabled={!user || !pass} color="primary" className="btn">
            <SendIcon className="send__icon" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
