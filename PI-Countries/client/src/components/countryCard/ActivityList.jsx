import "./ActivityList.css";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActivityList(props) {
  return (
    <div className="activityList">
      {props.activities.map((p) => {
        return (
          <div className="actCard">
            <li key={p.ID}>
              <h4 className="actName">{p.name}</h4>
              <div className="actInfo">
                <div className="actDetail">
                  <FontAwesomeIcon icon={faHourglass} /> {p.duration} mins.
                </div>
                <div className="actDetailMid">
                  {" "}
                  <FontAwesomeIcon icon={faSun} /> {p.season}
                  {"  "}
                </div>
                <div className="actDetail">
                  {"  "} <FontAwesomeIcon icon={faTachometerAlt} /> lvl.
                  {p.difficulty}
                </div>
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
}
