import { useState } from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

// todo app

// App_Test setUp_Test Logo.svg .gitignore

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(["Ehab", "Melhem"]);
  return (
    <div className="app">
      <form className="flex">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          autoFocus
          placeholder="add todo..."
          type="text"
        />
        <IconButton
          disabled={!input}
          type="submit"
          className={input ? "btn" : "stam"}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <AddIcon />
        </IconButton>
      </form>
      <div className="results">
        {todos.map((elm) => {
          return <h3>{elm}</h3>;
        })}
      </div>
    </div>
  );
}

export default App;
