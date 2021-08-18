import { Link } from "react-router-dom";
import "./landingPageStyles.css";
// import { getActivities, getCountries, getRegions } from "../../actions";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

export default function LandingPage() {
  return (
    <div className="mainLP">
      <div>
        <h1 className="title">WELCOME TO YOUR TRAVEL COMPANION APP</h1>
      </div>
      <Link to="/home">
        <div className="buttonContainer">
          <button className="homeButton">START YOUR ADVENTURE HERE!</button>
        </div>
      </Link>
    </div>
  );
}
