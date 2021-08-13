import "./countryCard.css";
import { Link } from "react-router-dom";

export default function CountryCard(props) {
  return (
    <>
      <ul className="cards">
        {props.countries.map((p) => (
          <li key={p.ID}>
            <Link to={`/search/${p.ID}`}>
              <div className="card">
                <div>
                  <img className="flag" src={p.flagImg} alt={p.name} />
                </div>
                <div className="cardName">{p.name}</div>
                <div>{p.region}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
