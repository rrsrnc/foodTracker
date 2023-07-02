import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout'
import EventCard from "./Event";
import Dashboard from "./Dashboard";
import './App.css'
import Card from "./AllEvents";
import { LoginForm, SignupForm } from "./authform";


function App() {
  const events = [
    {
      "title": 1,
      "date": "2023-07-04",
      "time": "21:00:00",
      "location": "Ranchi, India",
      "food_excess": 200,
      "mobile": 7004286381,
      "email": "rajeev7605@gmail.com",
      "description": "Food 150kg"
    },
    {
      "title": 2,
      "date": "2023-07-04",
      "time": "21:00:00",
      "location": "Ranchi, India",
      "food_excess": 200,
      "mobile": 7004286381,
      "email": "example@gmail.com",
      "description": "Food 150kg"
    },
    {
      "title": 3,
      "date": "2023-07-04",
      "time": "21:00:00",
      "location": "Ranchi, India",
      "food_excess": 200,
      "mobile": 7004286381,
      "email": "test@gmail.com",
      "description": "Food 150kg"
    },
    {
      "title": 4,
      "date": "2023-07-04",
      "time": "21:00:00",
      "location": "Ranchi, India",
      "food_excess": 200,
      "mobile": 7004286381,
      "email": "sample@gmail.com",
      "description": "Food 150kg"
    },
    {
      "title": 5,
      "date": "2023-07-04",
      "time": "21:00:00",
      "location": "Ranchi, India",
      "food_excess": 200,
      "mobile": 7004286381,
      "email": "info@gmail.com",
      "description": "Food 150kg"
    }
  ];

  


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
  function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log("Latitude: " + latitude + ", Longitude: " + longitude);
  }
  
  function errorCallback(error) {
    console.log("Error retrieving geolocation: " + error.message);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path="event" element={<EventCard />}/>
          <Route path="login" element={<LoginForm />}/>
          <Route path="signup" element={<SignupForm />}/>
          <Route path="all_events" element={<Card/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
