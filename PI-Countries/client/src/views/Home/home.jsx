//import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./homeStyles.css";

import { getCountries } from "../../actions";
import CountryCard from "../../components/countryCard/countryCard";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries);

  return (
    <>
      <div>Estoy en Home!</div>
      <button onClick={() => dispatch(getCountries())}>Get List!</button>

      <ul className>
        {countries.map((p) => (
          <li key={p.ID}>
            <CountryCard name={p.name} region={p.region} flagImg={p.flagImg} />
          </li>
        ))}
      </ul>
    </>
  );
}
