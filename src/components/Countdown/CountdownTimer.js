import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate =new Date("2024-10-22T23:59:59"); 
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-container ">
      <div className="countdown-timer">
        <div className="time-section">
          <span className="time-value">{timeLeft.days || "00"}</span>
          <span className="time-label">Days</span>
        </div>
        <div className="time-section">
          <span className="time-value">{timeLeft.hours || "00"}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-section">
          <span className="time-value">{timeLeft.minutes || "00"}</span>
          <span className="time-label">Mins</span>
        </div>
        <div className="time-section">
          <span className="time-value">{timeLeft.seconds || "00"}</span>
          <span className="time-label">Secs</span>
        </div>
      </div>
      <div className="countdown-message">The clock is ticking!</div>
    </div>
  );
};

export default CountdownTimer;
