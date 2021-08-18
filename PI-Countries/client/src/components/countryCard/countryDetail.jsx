import ActivityList from "./ActivityList";
import "./countryDetail.css";

export default function CountryDetail(props) {
  console.log(props);
  return (
    <>
      <div className="detailCard">
        <img src={props.flagImg} alt="" className="detailFlag" />
        <p>
          <h2 className="detailName">{props.name}</h2>
        </p>
        <h3>Country info detail:</h3>
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
          <div>
            Population: {new Intl.NumberFormat().format(props.population)}
          </div>
        </p>
        <p>
          <ul>
            <h3 className="actHead">
              Here is a list of activities you can check during your visit:
            </h3>
            <ActivityList activities={props.activities} />
          </ul>
        </p>
      </div>
    </>
  ); //hih
}
