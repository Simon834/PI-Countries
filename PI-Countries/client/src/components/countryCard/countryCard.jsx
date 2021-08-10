import "./countryCard.css";

export default function CountryCard(props) {
  return (
    <>
      <div className="card">
        <div>
          <img className="flag" src={props.flagImg} alt={props.name} />
        </div>
        <div className="cardName">{props.name}</div>
        <div>{props.region}</div>
      </div>
    </>
  );
}
