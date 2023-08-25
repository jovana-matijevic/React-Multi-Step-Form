import { useState } from "react";

export const Input = ({
  label,
  placeholder,
  type,
  required,
  pattern,
  name,
  defaultValue,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  function handleInvalid(event) {
    event.preventDefault();
    setErrorMessage(
      event.target.validationMessage.includes("@")
        ? "Invalid email address."
        : event.target.validationMessage
    );
  }

  function handleChange() {
    setErrorMessage("");
  }
  return (
    <div className="flex flex-col p-4 capitalize">
      <div className="flex items-center justify-between">
        <label>{label}</label>
        {errorMessage && (
          <span className="text-sm text-strawberry-red">{errorMessage}</span>
        )}
      </div>
      <input
        onInvalid={handleInvalid}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        name={name}
        defaultValue={defaultValue}
        className={`p-2 border border-light-gray rounded-md ${
          errorMessage
            ? "border border-strawberry-red"
            : "border-light-gray focus-within:border-purplish-blue"
        }`}
      ></input>
    </div>
  );
};
