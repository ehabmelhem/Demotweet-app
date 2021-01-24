import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import "./Todo.css";
function Todo({ text, todos, setTodos }) {
  function deletHandler() {
    setTodos(
      todos.filter((elm) => {
        return elm !== text;
      })
    );
  }
  return (
    <div className="todo">
      <h3>{text}</h3>
      <IconButton color="secondary">
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
}

export default Todo;
