import "./countryDetail.css";

export default function CountryDetail(props) {
  console.log(props);
  return (
    <>
      <div className="DetailContainer">
        <img src={props.flagImg} alt="" />
        <p>
          <h3>{props.name}</h3>
        </p>
        <p>
          <div>Capital city: {props.capital}</div>
        </p>
        <p>
          <div>
            Region and Sub-Region: {props.region}, {props.subregion}
          </div>
        </p>
        <p>
          <div>Area Code: {props.area}</div>
        </p>
        <p>
          <div>Population: {props.population}</div>
        </p>
        <p>
          <div>
            <ul>
              Here is a list of activities you can check during your visit:
              {props.activities.map((p) => {
                return <li key={p.ID}>{p.name}</li>;
              })}
            </ul>
          </div>
        </p>
      </div>
    </>
  );
}
