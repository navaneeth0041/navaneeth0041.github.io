import React from "react";
import './events.css';

const EventCard = ({ title, description, duration, time, link }) => {
  return (
    <div className="event-card">
      <div className="event-title-description">
        <h2 className="event-title">{title}</h2>
    </div>
        <div className="event-details">
          <p>Time: {time}</p>
          <p>Duration: {duration}</p>
        </div>
    </div>
  );
};

export default EventCard;
