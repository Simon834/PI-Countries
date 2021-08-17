import "./NavBarStyles.css";
import { useState } from "react";
import { getCountries, getCountriesName } from "../../actions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../auxfiles/logo.png";

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
  // const handleCountries = (e) => {
  //   e.preventDefault();
  //   dispatch(getCountries());
  // };
  return (
    <>
      <div className="NavBar">
        <Link to="/home">
          <img src={logo} alt="" className="logo" />
        </Link>
        <Link to="/createactivity">
          <div>Create your own Activity!</div>
        </Link>

        <form action="search" onSubmit={handleSubmit}>
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              name=""
              placeholder="Search"
              onChange={handleChange}
            />
            <button className="searchButton" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
