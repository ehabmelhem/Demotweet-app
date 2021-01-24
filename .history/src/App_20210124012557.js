import React from "react";
import Login from "./Login";
import { useState } from "react";
const users = [
  { username: "ehab", password: "123" },
  { username: "abc", password: "13" },
  { username: "abcd", password: "12" },
  { username: "efg", password: "1234" },
];
function App() {
  const [users, setUsers] = useState([
    { username: "ehab", password: "123" },
    { username: "abc", password: "13" },
    { username: "abcd", password: "12" },
    { username: "efg", password: "1234" },
  ]);
  return (
    <div className="app">
      {/* LogIn */}
      <Login users={users} />
      {/* Sign Up */}
    </div>
  );
}

export default App;
