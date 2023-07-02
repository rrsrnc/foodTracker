import React, { useState } from "react";
import "./Event.css";

const EventCard = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    contact: "",
    email: "",
  });

  
  const handleEventSubmit = (e) => {
    e.preventDefault();
    console.log(event)
    // Reset the form and event object
    setEvent({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      contact: "",
      email: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  return (
    <div className="eventCard">
      <form className="eventForm" onSubmit={handleEventSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={event.title}
          onChange={handleInputChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={event.date}
          onChange={handleInputChange}
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={event.time}
          onChange={handleInputChange}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={event.location}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={event.description}
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="contact">Mobile:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={event.contact}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email Id:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={event.email}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventCard;
