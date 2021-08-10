import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

//import { getCountries } from "../../actions";
import CountryCard from "../../components/countryCard/countryCard";

export default function SearchResults() {
  const countries = useSelector((store) => store.countriesSearch);

  return (
    <>
      <ul className="cards">
        {countries.map((p) => (
          <li key={p.ID}>
            <Link to={`/search/${p.ID}`}>
              <CountryCard
                name={p.name}
                region={p.region}
                flagImg={p.flagImg}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
