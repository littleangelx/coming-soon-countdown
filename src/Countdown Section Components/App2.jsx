import React from "react";
import CountdownTimer from "./CountdownTimer";

export default function App2() {
  let date = new Date();
  date.setDate(date.getDate() + 30);
  date.setHours(0, 0, 0, 0);
  // const millisecs = Date.parse(date);
  // const today = Date.now();
  // let date = new Date();
  // date.setDate(date.getDate() + 30);
  // date.setHours(0, 0, 0, 0);
  // const millisecs = Date.parse(date);

  // const difference = millisecs - today;
  // const days = Math.floor(difference / (24 * 60 * 60 * 1000));
  // const hours = Math.floor(
  //   (difference - days * 24 * 60 * 60 * 1000) / (60 * 60 * 1000)
  // );
  // const minutes = Math.floor(
  //   (difference - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) /
  //     (60 * 1000)
  // );
  // const seconds = Math.floor(
  //   (difference -
  //     days * 24 * 60 * 60 * 1000 -
  //     hours * 60 * 60 * 1000 -
  //     minutes * 60 * 1000) /
  //     1000
  // );

  return <CountdownTimer targetDate={date} />;
}
