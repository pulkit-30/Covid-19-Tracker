import React from "react";
import Style from "./Flex.module.css";
function Flex(props) {
  const classes = Style.flex + " " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Flex;
