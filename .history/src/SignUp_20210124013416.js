import React from "react";
import "./SignUp.css";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
function SignUp() {
  const classes = useStyles();

  return (
    <div className="signUp">
      <label>userName: </label>
      <input type="text" />
      <br />
      <br />
      <label>password:</label>
      <input className="pass" type="text" />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
    </div>
  );
}

export default SignUp;
