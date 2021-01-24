import React from "react";
import "./SignUp.css";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function SignUp({ users, setUsers }) {
  return (
    <div className="signUp">
      <label className="messege__success">ehab</label>
      <br />
      <label>userName: </label>
      <input type="text" />
      <br />
      <br />
      <label>password:</label>
      <input className="pass" type="text" />
      <br />
      <div className="groub__buttons">
        <Button className="btn_groub" variant="contained" color="primary">
          Login
        </Button>
        <Button className="btn_groub" variant="contained" color="primary">
          <PublishIcon />
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
