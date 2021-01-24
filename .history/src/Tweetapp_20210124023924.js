import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Tweetapp = (props) => {
  const location = useLocation();
  const name = location.state;
  const [data, setData] = useState([]); //[{user,"tweet"}]
  const [input, setInput] = useState("");
  return (
    <div className="tweets">
      <h1>Hi {name}</h1>
      <form className="tweet__input">
        <input placeholder="tweet..." type="text" />
        <button
          type="submit"
          disabled={!input}
          onClick={(e) => {
            e.preventDefault("");
            setData([...data, { name: name }]);
          }}
        >
          tweet
        </button>
      </form>
      {data.map((elm) => {
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
