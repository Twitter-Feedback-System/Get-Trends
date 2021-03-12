import React from "react";

const Tweet = ({ url }) => {
  return (
    <blockquote className="twitter-tweet">
      <a href={url}>exe</a>
    </blockquote>
  );
};

export default Tweet;
