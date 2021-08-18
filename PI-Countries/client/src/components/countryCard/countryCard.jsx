import "./countryCard.css";
import { Link } from "react-router-dom";

export default function CountryCard(props) {
  return (
    <>
      <ul className="cards">
        {props.countries.map((p) => (
          <li key={p.ID}>
            <Link to={`/search/${p.ID}`} className="link-card">
              <div className="card">
                <img className="flag" src={p.flagImg} alt={p.name} />

                <div className="cardInfo">
                  <p className="cardName">{p.name}</p>
                  <span>
                    <strong>Region:</strong> {p.region}
                  </span>
                  <span>
                    <strong>Population:</strong>{" "}
                    {new Intl.NumberFormat().format(p.population)}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
