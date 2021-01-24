import { useState } from "react";
import "./App.css";

export default function Good() {
  const [h1_value, setHvalue] = useState("ehab");
  const handel_click = () => {
    if(h1_value]==="ehab")
    setHvalue("melhem");
  };
  return (
    <div>
      <h1>{h1_value}</h1>
      <button onClick={handel_click}>click on me</button>
    </div>
  );
}
