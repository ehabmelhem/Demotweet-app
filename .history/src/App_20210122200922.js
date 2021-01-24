import { useState } from "react";
import "./App.css";

export default function Good() {
  let [h1_value, setHvalue] = useState("ehab");
  const handel_click = () => {
    setHvalue("");
  };
  return (
    <div>
      <h1>{h1_value}</h1>
      <button onClick={}>click on me</button>
    </div>
  );
}
