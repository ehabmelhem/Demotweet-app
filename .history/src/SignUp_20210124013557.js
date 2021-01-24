import React from "react";
import "./SignUp.css";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
function SignUp() {
  return (
    <div className="signUp">
      <label>userName: </label>
      <input type="text" />
      <br />
      <br />
      <label>password:</label>
      <input className="pass" type="text" />
      <br />
      <Button variant="contained" color="primary">
        <PublishIcon />
      </Button>
    </div>
  );
}

export default SignUp;
