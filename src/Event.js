import React, { useState } from "react";
import "./Event.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EventCard = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    contactPerson:"",
    contactDetail: "",
    email: "",
  });

  const [errors, setErrors] = useState({}); // State variable to hold validation errors

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs(event); // Validate the inputs
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with API request if no validation errors
      console.log(event);

      fetch("https://food-tracker-api.vercel.app/trackfood/weddings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the API
          toast.success("Event details submiited successfully")
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error(error);
        });

      // Reset the form and event object
      setEvent({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
        contactPerson:"",
        contactDetail: "",
        email: "",
      });
      setErrors({});
    } else {
      // Update the errors state variable with the validation errors
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const validateInputs = (event) => {
    const errors = {};

    if (!event.title) {
      errors.title = "Title is required.";
    }

    if (!event.date) {
      errors.date = "Date is required.";
    }

    if (!event.time) {
      errors.time = "Time is required.";
    }

    if (!event.location) {
      errors.location = "Location is required.";
    }

    if (!event.description) {
      errors.description = "Description is required.";
    }

    if (!event.contactDetail) {
      errors.contact = "Mobile is required.";
    }

    if (!event.email) {
      errors.email = "Email is required.";
    }

    return errors;
  };

  return (
    
    <div className="eventCard">
      <ToastContainer></ToastContainer>
      <form className="eventForm" onSubmit={handleEventSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={event.title}
          onChange={handleInputChange}
        />
        {errors.title && <span className="error">{errors.title}</span>}

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={event.date}
          onChange={handleInputChange}
        />
        {errors.date && <span className="error">{errors.date}</span>}

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={event.time}
          onChange={handleInputChange}
        />
        {errors.time && <span className="error">{errors.time}</span>}

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={event.location}
          onChange={handleInputChange}
        />
        {errors.location && <span className="error">{errors.location}</span>}

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={event.description}
          onChange={handleInputChange}
        ></textarea>
        {errors.description && <span className="error">{errors.description}</span>}

        <label htmlFor="contactPerson">Contact Person:</label>
        <input
          type="text"
          id="contactPerson"
          name="contactPerson"
          value={event.contactPerson}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Mobile:</label>
        <input
          type="text"
          id="contact"
          name="contactDetail"
          value={event.contactDetail}
          onChange={handleInputChange}
        />
        {errors.contact && <span className="error">{errors.contact}</span>}

        <label htmlFor="email">Email Id:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={event.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};

export default EventCard;
