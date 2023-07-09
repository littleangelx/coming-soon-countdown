import React from "react";

export default function Card(props) {
  return (
    <div className="card" style={{ backgroundColor: props.bgColor }}>
      <p className="planType" style={{ color: props.topColor }}>
        {props.planType}
      </p>
      <h1 className="planCost" style={{ color: props.topColor }}>
        {props.planCost}
      </h1>
      <p className="asBodyTextP" style={{ color: props.topColor }}>
        {props.bodyText[0]}
      </p>
      <div className="bodyText">
        <p style={{ color: props.btmColor }}>{props.bodyText[1]}</p>
        <p style={{ color: props.btmColor }}>{props.bodyText[2]}</p>
        <p style={{ color: props.btmColor }}>{props.bodyText[3]}</p>
      </div>
      <button className={props.btnClass}>Try for Free</button>
    </div>
  );
}
