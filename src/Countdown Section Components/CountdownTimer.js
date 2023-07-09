import React from "react";
import { useCountdown } from "./useCountdown";
import Card2 from "./Card2";

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className="countdownCards">
      <h1>
        Coming <span className="releaseDate">{targetDate.toDateString()}</span>
      </h1>
      <div className="countdown">
        <Card2 figure={days} timeUnit="days" />
        <Card2 figure={hours} timeUnit="hours" />
        <Card2 figure={minutes} timeUnit="min" />
        <Card2 figure={seconds} timeUnit="sec" />
      </div>
    </div>
  );
};

export default CountdownTimer;
