import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Tweetapp = (props) => {
  const location = useLocation();
  const name = location.state.user;
  //[{user,"tweet"}]
  const [input, setInput] = useState("");
  return (
    <div className="tweets">
      <h1>Hi {name}</h1>
      <form className="tweet__input">
        <input
          autoFocus
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          placeholder="tweet..."
          type="text"
        />
        <button
          type="submit"
          disabled={!input}
          onClick={(e) => {
            e.preventDefault("");
            // location.state.setData([
            //   ...location.state.data,
            //   { name: name, data: input },
            // ]);
            location.state.data.push({ name: name, data: input });
            setInput("");
          }}
        >
          tweet
        </button>
      </form>
      {location.state.data.map((elm) => {
        return (
          <h3>
            {elm.name}: {elm.data}
          </h3>
        );
      })}
    </div>
  );
};

export default Tweetapp;
