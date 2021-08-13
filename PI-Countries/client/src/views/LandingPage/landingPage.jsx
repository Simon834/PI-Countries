import { Link } from "react-router-dom";
import { getActivities, getCountries, getRegions } from "../../actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function LandingPage() {
  return (
    <>
      <Link to="/home">
        <button>Go Home!</button>
      </Link>
    </>
  );
}
