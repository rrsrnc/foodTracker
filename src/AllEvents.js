import "./AllEvents.css";
import React from "react";

const Card = (props) => {
  var events = props.props;

  const Consume = (event, type) => {

    if (type === "whatsapp") {
      var mobile = event.mobile; // Replace with the recipient's phone number
      var message =
        "Hello, we are contacting you on behalf of your listing on Food-Tracker website!"; // Replace with your desired message

      var url =
        "https://wa.me/" + mobile + "?text=" + encodeURIComponent(message);

      window.open(url);
    }

    else{
      var mailtoLink = "mailto:" + event.email +
                   "?subject=" + encodeURIComponent(event.description) +
                   "&body=" + encodeURIComponent("Hi");

  window.location.href = mailtoLink;
    }
  };

  return (
    <>
      <div className="events">
        {events.map((event) => (
          <div className="food-card" key={event.title}>
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
              <span>Contact Details:</span> {event.contact}
            </div>
            <div className="details">
              <span>Description:</span> {event.desc}
            </div>
            <div className="details">
              <span>Quantity:</span> {event.food_excess}
            </div>
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
