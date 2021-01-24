import React from "react";

function Tweetapp(props) {
  console.log(props.location.state);
  return (
    <div className="tweets">
      <h1>tweet</h1>
    </div>
  );
}

export default Tweetapp;
