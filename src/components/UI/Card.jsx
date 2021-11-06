import React from "react";
import Style from "./Card.module.css";
function Card(props) {
  return <div className={Style.card}>{props.children}</div>;
}

export default Card;
