import { useId, useState } from "react";

const AddonsCheckbox = ({
  name,
  value,
  title,
  description,
  defaultChecked = false,
  prices,
}) => {
  const id = useId();
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label
      htmlFor={id}
      className={`flex w-full h-20 gap-5 my-4 items-center p-5 border border-marine-blue hover:bg-alabaster hover:border-purplish-blue rounded-md checked::bg-marine-blue
      ${checked ? "border-purplish-blue bg-alabaster" : "border-cool-gray"}`}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        value={JSON.stringify(value)}
        onChange={(e) => setChecked(e.target.checked)}
        className="accent-purplish-blue w-4- h-4"
      ></input>
      <div className="flex flex-col ">
        <span className="font-medium text-base text-marine-blue">{title}</span>
        <span className="text-light-gray font-normal text-sm">
          {description}
        </span>
      </div>
      <span className="ml-auto font-light text-sm text-purplish-blue">
        {prices}
      </span>
    </label>
  );
};

export default AddonsCheckbox;
