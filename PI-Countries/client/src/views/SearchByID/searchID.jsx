//import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesID } from "../../actions";
//import { Link } from "react-router-dom";
import CountryDetail from "../../components/countryCard/countryDetail";

export default function SearchID(props) {
  const id = props.match.params.ID.toUpperCase();

  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesID(id)); // eslint-disable-next-line
  }, []);

  if (id !== countryDetail.ID) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        <ul className="cards">
          {
            <CountryDetail
              name={countryDetail.name}
              ID={countryDetail.ID}
              flagImg={countryDetail.flagImg}
              region={countryDetail.region}
              capital={countryDetail.capital}
              subregion={countryDetail.subregion}
              area={countryDetail.area}
              population={countryDetail.population}
              activities={countryDetail.activities}
            />
          }
        </ul>
      </>
    );
  }
}
