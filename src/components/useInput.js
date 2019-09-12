import { useState } from "react";

// Custom hook to handle the input change, submit and do validation
function useInput(
  validator,
  initialValue = "",
  notesIsValid,
  nameIsValid,
  emailIsValid
) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);
  let [showForm, setShowForm] = useState(true);
  let [showErrors, setShowErrors] = useState(false);
  const onChange = e => {
    setValue(e.target.value);
    setIsValid(validator(e.target.value, e.target.name));
  };
  const onSubmit = (e, notesIsValid, nameIsValid, emailIsValid) => {
    e.preventDefault();
    if (notesIsValid && nameIsValid && emailIsValid) {
      setShowForm(false);
    } else {
      setShowErrors(true);
    }
  };
  return { onChange, value, isValid, onSubmit, showForm, showErrors };
}

export default useInput;
