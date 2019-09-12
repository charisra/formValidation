import React from "react";
import { Input } from "reactstrap";

const CustomInput = ({ showErrors, isValid, name, value, ...rest }) => {
  return (
    <div>
      <Input
        {...rest}
        name={name}
        className={showErrors && !isValid ? "is-invalid" : null}
      />
      {showErrors && !isValid && name !== "notes" && (
        <div className="invalid-feedback">Please fill in a valid {name}</div> // Helper div to render the validation
      )}
      {name === "notes" && (
        <div className={value.length >= 20 ? "valid" : "invalid"}>
          {!isValid && showErrors
            ? "Please write at least 20 characters. Current count: " +
              value.length
            : value.length}
        </div>
      )}
    </div>
  );
};
export default CustomInput;
