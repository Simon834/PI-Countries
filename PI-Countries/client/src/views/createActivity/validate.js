export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Activity name is required";
  } else if (!/([a-z])\w+/.test(input.name)) {
    errors.name = "Activity name is invalid";
  } else if (!input.difficulty) {
    errors.difficulty = "Difficulty is required";
  } else if (!/^([1-9]|[1-9][0-9]|[1-2][0-5][0-5])$/.test(input.difficulty)) {
    errors.difficulty = "Difficulty is invalid";
  } else if (!input.duration) {
    errors.duration = "Duration is required";
  } else if (
    !/^([5-9]|[1-9][0-9]|[1][0-8][0-9]|[1][9][0])$/.test(input.duration)
  ) {
    errors.duration = "Duration is invalid";
  } else if (!input.season) {
    errors.duration = "Season name is required";
  } else if (!/([a-z])\w+/.test(input.season)) {
    errors.duration = "Season name is invalid";
  } else if (input.countries.length === 0) {
    errors.countries = "At least 1 country is required";
  }
  return errors;
}
