import { Link } from "react-router-dom";
import { getCountries } from "../../actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <Link to="/home">
        <button>Go Home!</button>
      </Link>
    </>
  );
}
