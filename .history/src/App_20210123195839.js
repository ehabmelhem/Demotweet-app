import { useState } from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Todo from "./Todo";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "@material-ui/icons";
// todo app

// App_Test setUp_Test Logo.svg .gitignore

function App() {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);
  const [flag, setFlag] = useState(true);
  let history = useHistory();
  console.log(history);
  function handleClick() {
    history.push("/home");
  }

  return (
    <Router>
      <div>
        <HomeButton />
        <Switch>
          <Route path="/home">
            <div>
              <h1>hii in home</h1>
            </div>
          </Route>
          <Route path="/">
            <h1>hii from local app</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );

  // <div className="app">
  //   <form className="flex">
  //     <Checkbox
  //       checked={flag}
  //       onChange={(e) => {
  //         setFlag(!flag);
  //       }}
  //     />
  //     <input
  //       value={input}
  //       onChange={(e) => {
  //         setInput(e.target.value);
  //       }}
  //       autoFocus
  //       placeholder="add todo..."
  //       type="text"
  //     />
  //     <IconButton
  //       disabled={!input}
  //       type="submit"
  //       className={input ? "btn" : "stam"}
  //       onClick={(e) => {
  //         e.preventDefault();
  //         setTodos([...todos, { text: input, id: counter }]);
  //         setInput("");
  //         setCounter(counter + 1);
  //       }}
  //     >
  //       <AddIcon />
  //     </IconButton>
  //   </form>
  //   <div className="results">
  //     {todos.map((elm) => {
  //       return (
  //         <Todo
  //           withId={flag}
  //           text={elm.text}
  //           todos={todos}
  //           setTodos={setTodos}
  //           id={elm.id}
  //         />
  //       );
  //     })}
  //   </div>
  // </div>
  //);
}

export default App;
