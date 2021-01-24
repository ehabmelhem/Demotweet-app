import React, { useState } from "react";
import "./SignUp.css";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function SignUp({ users, setUsers }) {
  const [open, setOpen] = React.useState(false);
  const [openerror, setOpenError] = React.useState(false);

  const [user, setUser] = useState("");
  const [pass, setpass] = useState("");

  const handleClick = () => {
    users.forEach((element) => {
      console.log(element.username);
      if (element.username === user) {
        setOpenError(true);
        setOpen(false);
        return;
      }
    });
    setUsers([...users, { username: user, password: pass }]);
    setOpen(true);
    setOpenError(false);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenError(false);
  };
  return (
    <div className="signUp">
      <br />
      <label>userName: </label>
      <input
        vlaue={user}
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <br />
      <br />
      <label>password:</label>
      <input
        value={pass}
        onChange={(e) => {
          setpass(e.target.value);
        }}
        className="pass"
        type="text"
      />
      <br />
      <div className="groub__buttons">
        <Button className="btn_groub" variant="contained" color="primary">
          Login
        </Button>
        <Button
          onClick={handleClick}
          className="btn_groub"
          variant="contained"
          color="primary"
        >
          <PublishIcon />
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            you have been sign up success full
          </Alert>
        </Snackbar>
        <Snackbar
          open={openerror}
          autoHideDuration={6000}
          onClose={handleErrorClose}
        >
          <Alert onClose={handleErrorClose} severity="error">
            you have to insert another user name
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default SignUp;
