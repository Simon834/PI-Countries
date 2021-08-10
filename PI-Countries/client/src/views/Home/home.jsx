import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import "./homeStyles.css";

//import { getCountries } from "../../actions";
import CountryCard from "../../components/countryCard/countryCard";

export default function Home() {
  const countries = useSelector((store) => store.countries);

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
