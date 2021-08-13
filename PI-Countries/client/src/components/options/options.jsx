import {
  getActivities,
  getCountries,
  getRegions,
  orderFilter,
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Options() {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions);
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getRegions());
  }, []);

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(orderFilter(e.target.value));
  };

  const handleFilter = async (e) => {
    dispatch(orderFilter(e.target.name, e.target.value));
  };

  return (
    <>
      <div>
        Order by:
        <select name="Orders" id="" onChange={handleOrder}>
          <option value="Default" hidden selected disabled>
            Choose one...
          </option>
          <option value="Allorder">Default</option>
          <option value="nameAZ">Name: A-Z</option>
          <option value="nameZA">Name: Z-A</option>
          <option value="popH2L">Population: High to Low</option>
          <option value="popL2H">Population: Low to High</option>
        </select>
        Filter by Continent:
        <select name="filterRegion" onChange={handleFilter}>
          <option value="All">All</option>
          {regions.map((p) => (
            <option value={p}>{p}</option>
          ))}
        </select>
        Filter by Activity:
        <select name="filterActivity" onChange={handleFilter}>
          <option value="All">All</option>
          {activities.map((p) => (
            <option value={p}>{p}</option>
          ))}
        </select>
      </div>
    </>
  );
}
