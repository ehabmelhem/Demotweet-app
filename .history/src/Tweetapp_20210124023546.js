import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Tweetapp = (props) => {
  const location = useLocation();
  const name = location.state;
  const [data, setData] = useState([]); //[{user,"tweet"}]
  return (
    <div className="tweets">
      <h1>Hi {name}</h1>
      <form className="tweet__input">
        <input type="text" />
        <button type="submit">tweet</button>
      </form>
    </div>
  );
};

export default Tweetapp;
