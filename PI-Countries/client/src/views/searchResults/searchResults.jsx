import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
//import "./searchResultsStyles.css";

//import { getCountries } from "../../actions";
import CountryCard from "../../components/countryCard/countryCard";
import "./searchResult.css";

export default function SearchResult(props) {
  const countries = useSelector((store) => store.countrySearch);
  const search = props.match.params.name;

  return (
    <>
      <div className="homeContainer">
        <div className="resultTitle">
          Showing search results for: "{search}"
        </div>
        <CountryCard countries={countries} />
      </div>
    </>
  );
}
