import React, { Component } from "react";

const LikeBtn = (props) => {
  let classes = "fa fa-heart";

  if (!props.liked) classes += "-o";

  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      aria-hidden="true"
    >
      <span style={{ fontSize: 12 }}>+{props.likes}</span>
    </i>
  );
};

export default LikeBtn;
