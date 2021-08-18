import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountriesName } from "../../actions";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
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
    <form action="search" onSubmit={handleSubmit}>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search"
          onChange={handleChange}
          required
        />
        <button className="searchButton" type="submit">
          <FontAwesomeIcon icon={faSearchLocation} />
        </button>
      </div>
    </form>
  );
}
