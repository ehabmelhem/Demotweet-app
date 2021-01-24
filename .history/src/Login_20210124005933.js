import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <form className="flex">
        <label>UserName: </label>
        <input type="text" />
        <br />
        <br />
        <input type="text" />
      </form>
    </div>
  );
}

export default Login;
