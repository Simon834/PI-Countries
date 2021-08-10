import "./NavBarStyles.css";
import { useState } from "react";
import { getCountriesName } from "../../actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    countrySearch: "",
  });

  const handleChange = (e) => {
    setSearch({
      ...search,
      countrySearch: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountriesName(search.countrySearch));
  };
  return (
    <>
      <div className="NavBar">
        <div>Titulo</div>
        <div>Logo!!!!</div>

        <input
          type="text"
          placeholder="Type a country name..."
          onChange={(e) => handleChange(e)}
        />
        <Link to={`/searchResults`}>
          <button onClick={(e) => handleSubmit(e)}>Search</button>
        </Link>
      </div>
    </>
  );
}
