import { useState } from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
// todo app

// App_Test setUp_Test Logo.svg .gitignore

function App() {
  return (
    <div className="app">
      <form className="flex">
        <input type="text" />
        <AddIcon />
      </form>
    </div>
  );
}

export default App;
