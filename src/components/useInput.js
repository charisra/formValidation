import { useState } from "react";

// Custom hook to handle the input change and do validation
function useInput(validator, initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);
  const onChange = e => {
    setValue(e.target.value);
    setIsValid(validator(e.target.value, e.target.name));
  };
  return { onChange, value, isValid };
}

export default useInput;
