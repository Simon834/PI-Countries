import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesID } from "../../actions";
import { Link } from "react-router-dom";
import CountryCard from "../../components/countryCard/countryCard";

export default function SearchID(props) {
  const id = props.match.params.ID.toUpperCase();

  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getCountriesID(id));
  }, [id]);

  if (id !== countryDetail.ID) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        <ul className="cards">
          {
            <CountryCard
              name={countryDetail.name}
              region={countryDetail.region}
              flagImg={countryDetail.flagImg}
            />
          }
        </ul>
      </>
    );
  }
}
