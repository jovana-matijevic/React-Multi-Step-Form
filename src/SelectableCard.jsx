import { useId, useState } from "react";

const SelectableCard = ({
  title,
  subtitle,
  value,
  description,
  imgSrc,
  name,
  defaultCheck = false,
}) => {
  const id = useId();
  //const [checked, setChecked] = useState(defaultCheck);

  return (
    <div className="flex">
      <input
        id={id}
        name={name}
        type="radio"
        className="hidden peer"
        defaultChecked={defaultCheck}
        value={JSON.stringify(value)}
        //checked={checked}
        //onChange={(e) => setChecked(e.target.checked)}
      ></input>
      <label
        htmlFor={id}
        className={`flex md:flex-col md:w-[140px] p-3 gap-4 w-full rounded-md border border-solid bg-white border-cool-gray peer-checked:border-purplish-blue peer-checked:bg-magnolia hover:border-purplish-blue`}
      >
        <img className="w-min" src={imgSrc} alt="" />
        <div className="md:mt-6">
          <p className="font-bold capitalize">{title}</p>
          <p className="text-cool-gray text-sm">{subtitle}</p>
          {description && (
            <p className="text-xs font-medium text-marine-blue">
              {description}
            </p>
          )}
        </div>
      </label>
    </div>
  );
};

export default SelectableCard;
