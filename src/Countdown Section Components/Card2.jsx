import React from "react";

export default function Card2(props) {
  return (
    <div className="countdownCard">
      <div className="figure">{props.figure}</div>
      <div className="timeUnit">{props.timeUnit}</div>
    </div>
  );
}
