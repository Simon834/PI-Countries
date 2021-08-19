import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../actions";
import "./createActivityStyles.css";
import { validate } from "./validate";

export default function CreateActivity() {
  const [newActivity, setnewActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries()); // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setnewActivity({
      ...newActivity,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...newActivity,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(postActivity(newActivity));
      e.target.reset();
      setnewActivity({});
      alert("Activity created! awesome!");
    } else {
      alert("Check the required fields");
    }
  };

  const handleCountries = (e) => {
    setnewActivity({
      ...newActivity,
      [e.target.name]: Array.from(e.target.selectedOptions).map((p) => p.value),
    });
    setErrors(
      validate({
        ...newActivity,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <>
      <div className="formContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <p>
            How is this activity called:
            <input
              type="text"
              name="name"
              placeholder="Activity Name"
              onChange={(e) => handleChange(e)}
              className="fromText"
              required
            />
          </p>
          {errors.name && <p className="danger">{errors.name}</p>}
          <p>
            In a scale from 1 - 5, how difficult is this activity:{" "}
            <input
              type="number"
              name="difficulty"
              placeholder="Difficulty (1-5)"
              onChange={(e) => handleChange(e)}
              max={5}
              min={1}
            />
          </p>
          {errors.difficulty && <p className="danger">{errors.difficulty}</p>}
          <p>
            How long will it take to complete this activity:{" "}
            <input
              type="text"
              name="duration"
              placeholder="Duration (mins)"
              onChange={(e) => handleChange(e)}
              className="formText"
            />
          </p>
          {errors.duration && <p className="danger">{errors.duration}</p>}
          <p>
            <label>
              Pick a Season for your Activity:
              <select
                onChange={(e) => handleChange(e)}
                name="season"
                defaultValue="default"
              >
                <option disabled hidden value="default">
                  Choose One
                </option>
                <option value="Summer" key="Summer">
                  Summer
                </option>
                <option value="Winter" key="Winter">
                  Winter
                </option>
                <option value="Fall" key="Fall">
                  Fall
                </option>
                <option value="Spring" key="Spring">
                  Spring
                </option>
              </select>
              {errors.season && <p className="danger">{errors.season}</p>}
            </label>
          </p>

          <p>
            <label>
              Choose the countries in wich your activity is available:
              <select
                name="countries"
                multiple="multiple"
                onChange={(e) => handleCountries(e)}
                required
              >
                {countries.map((p) => {
                  return (
                    <option value={p.ID} key={p.ID}>
                      {p.name}
                    </option>
                  );
                })}
              </select>
            </label>
          </p>
          {errors.countries && <p className="danger">{errors.countries}</p>}
          <p>
            <input
              type="submit"
              value="Create your Activity!"
              className="submitActivity"
            />
          </p>
        </form>
      </div>
    </>
  );
}
