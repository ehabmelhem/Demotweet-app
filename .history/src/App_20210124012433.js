import React from "react";
import Login from "./Login";
const users = [
  { username: "ehab", password: "123" },
  { username: "abc", password: "13" },
  { username: "abcd", password: "12" },
  { username: "efg", password: "1234" },
];
function App() {
  return (
    <div className="app">
      {/* LogIn */}
      <Login />
      {/* Sign Up */}
    </div>
  );
}

export default App;
