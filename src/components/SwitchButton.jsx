import { useState, useId } from "react";
const SwitchButton = ({ value, onChange }) => {
  const id = useId();
  return (
    <div className="">
      <label className="switch">
        <input
          id={id}
          type="checkbox"
          className="hidden"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="onOff"></span>
      </label>
    </div>
  );
};

export default SwitchButton;
