import { orderFilter } from "../../actions";
import { useDispatch } from "react-redux";

export default function Options() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(orderFilter(e.target.value));
  };
  return (
    <>
      <div>
        Order by:
        <select name="Orders" id="" onChange={handleChange}>
          <option value="nameAZ">Name: A-Z</option>
          <option value="nameZA">Name: Z-A</option>
          <option value="popH2L">Population: High to Low</option>
          <option value="popL2H">Population: Low to High</option>
        </select>
        Filter by:
        <select name="" id="">
          <option value="continent">Continent</option>
          <option value="activity">Activity</option>
        </select>
      </div>
    </>
  );
}
