import "./AllEvents.css";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    fetch("https://food-tracker-api.vercel.app/trackfood/weddings/")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  fetchEvents()

  const Consume = (event, type) => {
    if (type === "whatsapp") {
      var mobile = event.mobile;
      var message =
        "Hello, we are contacting you on behalf of your listing on Food-Tracker website!";
      var url =
        "https://wa.me/" + mobile + "?text=" + encodeURIComponent(message);
      window.open(url);
    } else {
      var mailtoLink =
        "mailto:" +
        event.email +
        "?subject=" +
        encodeURIComponent(event.description) +
        "&body=" +
        encodeURIComponent("Hi");
      window.location.href = mailtoLink;
    }
  };

  return (
    <>
      <div className="events">
        {events.map((event) => (
          <div className="food-card" key={event.id}>
            <div className="name">Event: {event.title}</div>
            <div className="details">
              <span>Date:</span> {event.date}
            </div>
            <div className="details">
              <span>Time:</span> {event.time}
            </div>
            <div className="details">
              <span>Location:</span> {event.location}
            </div>
            <div className="details">
              <span>Contact Person:</span> {event.contactPerson}
            </div>
            <div className="details">
              <span>Contact Details:</span> {event.contactDetail }
            </div>
            <div className="details">
              <span>Description:</span> {event.description}
            </div>
            {/* <div className="details">
              <span>Quantity:</span> {event.food_excess}
            </div> */}
            <div className="actions">
              <button
                onClick={() => {
                  Consume(event, "whatsapp");
                }}
              >
                whatsapp
              </button>
              <button
                onClick={() => {
                  Consume(event, "email");
                }}
              >
                email
              </button>
              <button>Discard</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
