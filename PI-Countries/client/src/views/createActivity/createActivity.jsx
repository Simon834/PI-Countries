import "./createActivityStyles.css";

export default function CreateActivity() {
  return (
    <>
      <form>
        <p>
          <input type="text" name="name" placeholder="Activity Name" />
        </p>
        <p>
          <input type="text" name="difficulty" placeholder="Difficulty (1-5)" />
        </p>
        <p>
          <input type="text" name="duration" placeholder="Duration (mins)" />
        </p>
        <label>
          Pick a Season for your Activity:
          <select>
            <option disabled selected hidden>
              Choose One
            </option>
            <option value="Summer">Summer</option>
            <option value="Winter">Winter</option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
          </select>
        </label>
        <p>
          <input type="text" />
        </p>
        <p>
          <input type="submit" value="Create your Activity!" />
        </p>
      </form>
    </>
  );
}
