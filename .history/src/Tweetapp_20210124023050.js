import React from "react";
import { useLocation } from "react-router-dom";

const Tweetapp = (props) => {
  const location = useLocation();

  console.log(location);
  return (
    <div className="tweets">
      <h1>tweet</h1>
    </div>
  );
};

export default Tweetapp;
