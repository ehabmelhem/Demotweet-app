import React from "react";
import Login from "./Login";
import { useState } from "react";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [users, setUsers] = useState([
    { username: "ehab", password: "123" },
    { username: "abc", password: "13" },
    { username: "abcd", password: "12" },
    { username: "efg", password: "1234" },
  ]);
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* LogIn */}
          <Route>
            <Login users={users} />
          </Route>

          {/* Sign Up */}
          <Route path="/signup">
            <SignUp users={users} setUsers={setUsers} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
