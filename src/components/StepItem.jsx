const StepItem = ({ text, step, active }) => {
  return (
    <div className="flex gap-3 items-center">
      <div
        className={`rounded-full font-bold flex items-center justify-center h-7 w-7  ${
          active
            ? "bg-light-blue text-marine-blue"
            : "text-white border-white border border-solid"
        }`}
      >
        {step}
      </div>
      <div className="uppercase hidden sm:block">
        <p className="text-cool-gray text-sm leading-none">Step {step}</p>
        <p className="text-white font-bold">{text}</p>
      </div>
    </div>
  );
};

export default StepItem;
