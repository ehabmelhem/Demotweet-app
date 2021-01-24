import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import "./Todo.css";
function Todo({ text, todos, setTodos, id, withId }) {
  const deletHandler = () => {
    if (withId) {
      setTodos(
        todos.filter((elm) => {
          return elm.id !== id;
        })
      );
    } else {
      setTodos(
        todos.filter((elm) => {
          return elm !== id;
        })
      );
    }
  };
  return (
    <div className="todo">
      <h3>{text}</h3>
      <IconButton onClick={deletHandler} color="secondary">
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
}

export default Todo;
