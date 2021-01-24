import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTweet } from "./redux/action";
const Tweetapp = (props) => {
  const location = useLocation();
  const name = location.state.user;
  //[{user,"tweet"}]
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.tweets.tweets);
  const tweets = state.tweets.tweets;
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
            dispatch(addTweet({ name: name, tweetInput: input }));
            // location.state.setData([
            //   ...location.state.data,
            //   { name: name, data: input },
            // ]);
            // location.state.data.push({ name: name, data: input });
            setInput("");
          }}
        >
          tweet
        </button>
      </form>
      {}
    </div>
  );
};

export default Tweetapp;
