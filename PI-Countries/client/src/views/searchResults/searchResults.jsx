import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
//import "./searchResultsStyles.css";

//import { getCountries } from "../../actions";
import CountryCard from "../../components/countryCard/countryCard";

export default function SearchResult(props) {
  const countries = useSelector((store) => store.countrySearch);
  const search = props.match.params.name;

  return (
    <>
      <h2>Showing search results for: "{search}"</h2>
      <CountryCard countries={countries} />
    </>
  );
}
