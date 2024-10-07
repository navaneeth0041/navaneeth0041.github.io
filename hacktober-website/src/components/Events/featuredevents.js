import React from "react";
import EventCard from "./eventcard";
import './events.css';

const FeaturedEvents = () => {
  const events = [
    {
      title: "Guest Speaker Session on Open Source",
      description: "The official beginning of Hacktoberfest. Join DigitalOcean developers and guest speakers as we begin the month-long hacking event.",
      time: "10:00 AM ",
      duration:"40 mins"
    },
    {
      title: "Introduction to Git, Github, Student Dev Pack",
      description: "Find out what’s new in open-source developer tools. Join the conversation and get the scoop from industry insiders.",
      time: "10:40 AM ",
      duration:"50 mins"
    },
    {
      title: "Basics of Git, Linux, Github Pages",
      description: "Find out what’s new in open-source developer tools. Join the conversation and get the scoop from industry insiders.",
      time: "11:30 AM ",
      duration:"1 hr"
    },
    {
      title: "am/Place",
      description: "Find out what’s new in open-source developer tools. Join the conversation and get the scoop from industry insiders.",
      time: "1:30 PM ",
      duration:"1 hr 10 min"
    },
    {
      title: "Git Genie",
      description: "Find out what’s new in open-source developer tools. Join the conversation and get the scoop from industry insiders.",
      time: "3:30 PM ",
      duration:"2 hr"
    },
    {
      title: "Hackweek",
      description: "Find out what’s new in open-source developer tools. Join the conversation and get the scoop from industry insiders.",
      time: "5:30 PM ",
      duration:"20 mins"
    },
    

  ];

  return (
    <div className="featured-events">
      <h3 className="header-events"> EVENTS</h3>
      <div className="events-list">
        {events.map((event, index) => (
          <EventCard 
            key={index}
            title={event.title}
            description={event.description}
            time={event.time}
            duration={event.duration}

          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
