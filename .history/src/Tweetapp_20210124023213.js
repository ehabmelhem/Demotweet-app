import React from "react";
import { useLocation } from "react-router-dom";

const Tweetapp = (props) => {
  const location = useLocation();
  const name = location.state;
  return (
    <div className="tweets">
      <h1>Hi {name}</h1>
    </div>
  );
};

export default Tweetapp;
