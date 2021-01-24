import { useState } from "react";
import "./App.css";

export default function Good() {
  const [h1_value, setHvalue] = useState("ehab");
  return (
    <div>
      <h1>{h1_value}</h1>
      <button>click on me</button>
    </div>
  );
}
