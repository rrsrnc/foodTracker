import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <Link className="menu" to={"home"}>Home</Link>
          <Link className="menu" to={"all_events"}>Events</Link>
          <span className="menu">Nearby</span>
          <Link className="menu" to={"event"}>Add Event</Link>
        </div>
        <div className="middle">
          <input className="search" placeholder="search events"/>
        </div>
        <div className="right">
          <button className="login auth">login</button>
          <button className="signup auth">signup</button>
          <button className="logout auth">logout</button>
        </div>
      </header>
    </>
  );
};

export default Header;
