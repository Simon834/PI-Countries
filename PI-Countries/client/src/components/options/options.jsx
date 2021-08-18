import { getActivities, getRegions, orderFilter } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./options.css";

export default function Options() {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions);
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getRegions()); // eslint-disable-next-line
  }, []);

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(orderFilter(e.target.value));
  };

  const handleFilter = async (e) => {
    console.log(e);
    dispatch(orderFilter(e.target.name, e.target.value));
  };

  return (
    <>
      <div className="optionsContainer">
        <div className="orderBar">
          <strong className="orderTitle">Order by:</strong>
          <select name="Orders" id="orders" onChange={handleOrder}>
            <option value="Default" hidden selected disabled>
              Choose one...
            </option>
            <option value="Allorder">Default</option>
            <option value="nameAZ">Name: A-Z</option>
            <option value="nameZA">Name: Z-A</option>
            <option value="popH2L">Population: High to Low</option>
            <option value="popL2H">Population: Low to High</option>
          </select>
        </div>
        <div className="filterReg">
          <strong className="orderTitle">Filter by Continent:</strong>
          <select name="filterRegion" onChange={handleFilter}>
            <option value="All">All</option>
            {regions.map((p) => (
              <option value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="filterAct">
          <strong className="orderTitle">Filter by Activity:</strong>
          <select name="filterActivity" onChange={handleFilter}>
            <option value="All">All</option>
            {activities.map((p) => (
              <option value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
