import { useState } from "react";
import "./App.css";
// todo app

function App() {
  const [h1_value, setHvalue] = useState("ehab");
  const handel_click = () => {
    if (h1_value === "ehab") setHvalue("melhem");
    else setHvalue("ehab");
  };
  return (
    <div className="app">
      <h1>{h1_value}</h1>
      <button onClick={handel_click}>click on me</button>
    </div>
  );
}

export default App;
