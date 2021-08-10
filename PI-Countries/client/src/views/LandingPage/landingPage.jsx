import { Link } from "react-router-dom";
import { getCountries } from "../../actions";
import { useDispatch } from "react-redux";

export default function LandingPage() {
  const dispatch = useDispatch();

  return (
    <>
      <Link to="/home">
        <button onClick={() => dispatch(getCountries())}>Let's Go!!</button>
      </Link>
    </>
  );
}
