import { useState } from "react";
import "./App.css";

export default function Good() {
  const [h1_value, setHvalue] = useState("ehab");
  const handel_click = () => {
    setHvalue("melhem");
  };
  return (
    <div>
      <h1>{h1_value}</h1>
      <button onClick={handel_click}>click on me</button>
    </div>
  );
}
