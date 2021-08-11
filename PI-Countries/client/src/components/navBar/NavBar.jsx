import "./NavBarStyles.css";
import { useState } from "react";
import { getCountriesName } from "../../actions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountriesName(search));
    history.push(`/searchResult/${search}`);
    e.target.reset();
    setSearch("");
  };
  return (
    <>
      <div className="NavBar">
        <Link to="/home">
          <div>Home!!!!</div>
        </Link>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Type a country name..."
            onChange={(e) => handleChange(e)}
          />
          <input type="submit" value="Search" />
        </form>
        <Link to="/createactivity">
          <div>Create your own Activity!</div>
        </Link>
      </div>
    </>
  );
}
