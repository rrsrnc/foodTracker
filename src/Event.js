import React from "react";
import "./Event.css";

const EventCard = ({ title, date, location, description,contact,time,quantity}) => {

  const handleEventSubmit=(event)=> {
    event.preventDefault()
    event.preventDefault();
    let form=event.target.elements
    var title = form.title.value;
    var date = form.date.value;
    var location = form.location.value;
    var desc = form.description.value;
    console.log("Title: " + title,date,location,desc);
  }
  return (
    <div className="eventCard">
      <form className="eventForm" onSubmit={handleEventSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={date} />

        <label htmlFor="time">Date:</label>
        <input type="time" id="time" name="date" value={time} />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={location} />


        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description">
          {description}
        </textarea>
        {/* <label htmlFor="quantity">Contact details:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} /> */}
        <label htmlFor="contact">Mobile:</label>
        <input type="text" id="contact" name="contact" value={contact} />
        <label htmlFor="email">Email Id:</label>
        <input type="text" id="email" name="email" />

        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventCard;
