import "./countryCard.css";

export default function CountryCard(props) {
  return (
    <>
      <div className="card">
        <div className="roundedflag">
          <img className="flag" src={props.flagImg} alt={props.name} />
        </div>
        <h2>{props.name}</h2>
        <div>{props.region}</div>
      </div>
    </>
  );
}
