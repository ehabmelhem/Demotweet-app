import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

function Todo({ text }) {
  return (
    <div>
      <IconButton>
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
}

export default Todo;
