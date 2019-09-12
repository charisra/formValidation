// Function that handles validation
export function validator(value, name) {
  if (name === "name") {
    if (value.length <= 0) {
      return false;
    } else {
      return true;
    }
  }
  if (name === "email") {
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toLowerCase()); // Validate email with a Regex
    if (emailIsValid) {
      return true;
    } else {
      return false;
    }
  }
  if (name === "notes") {
    if (value.length < 20) {
      return false;
    } else {
      return true;
    }
  }
}
