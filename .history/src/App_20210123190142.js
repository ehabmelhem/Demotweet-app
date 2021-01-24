import { useState } from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Todo from "./Todo";

// todo app

// App_Test setUp_Test Logo.svg .gitignore

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <form className="flex">
        <input
          value={input}
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
            setTodos([...todos, input]);
            setInput("");
          }}
        >
          <AddIcon />
        </IconButton>
      </form>
      <div className="results">
        {todos.map((elm) => {
          return <Todo />;
        })}
      </div>
    </div>
  );
}

export default App;
