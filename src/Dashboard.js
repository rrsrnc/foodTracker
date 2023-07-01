import React from "react";
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className="landing-page">
      <header className="">
        <h1>Food Donation Website</h1>
        <p>Help reduce food waste by donating leftover food from parties and weddings!</p>
      </header>
      <section className="food-section">
        <h2>Featured Leftover Foods</h2>
      </section>
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <p>1. Post details about your leftover food items.</p>
        <p>2. Local organizations and charities find and request the food items.</p>
        <p>3. Coordinate the pickup or delivery of the donated food.</p>
      </section>
      <section className="why-donate-section">
        <h2>Why Donate Leftover Food?</h2>
        <ul>
          <li>Reduce food waste and its environmental impact.</li>
          <li>Help people in need by providing them with nutritious meals.</li>
          <li>Build a stronger community by fostering goodwill and collaboration.</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
