import { useState } from "react";
import { formatPlanPrice } from "../util/createPricesString";

const FinishTemplate = ({ planName, isYearly, addons, plan }) => {
  const [yearly, setYearly] = useState(isYearly);
  const getTotalPrice = () => {
    if (yearly) {
      return (
        plan.yearly +
        addons.reduce((sum, addon) => {
          return sum + addon.yearly;
        }, 0)
      );
    } else {
      return (
        plan.monthly +
        addons.reduce((sum, addon) => {
          return sum + addon.monthly;
        }, 0)
      );
    }
  };
  return (
    <div>
      <div className="w-full h-fit p-4 m-4 bg-alabaster rounded-lg">
        <div className="flex items-center justify-between pb-5 px-3 border-b border-light-gray">
          <div className="flex flex-col">
            <span className="font-medium text-lg text-marine-blue capitalize">
              {`${planName} (${yearly ? "yearly" : "Monthly"})`}
            </span>
            <span
              className="underline text-sm font-thin text-cool-gray cursor-pointer hover:text-purplish-blue"
              onClick={() => setYearly(!yearly)}
            >
              Change
            </span>
          </div>
          <div>
            <span className="font-semibold text-marine-blue">
              {formatPlanPrice(plan, yearly)}
            </span>
          </div>
        </div>
        <div>
          {addons?.map((addon) => (
            <div key={addon.id} className="flex justify-between p-3">
              <span className="text-sm font-thin text-cool-gray">
                {addon.name}
              </span>
              <span className="text-sm font-thin text-marine-blue">{`+${formatPlanPrice(
                addon,
                yearly
              )}`}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full items-center pl-8">
        <span className="text-sm font-thin text-cool-gray p-3">{`Total (per ${
          yearly ? "year" : "month"
        })`}</span>
        <span className="text-purplish-blue font-bold text-lg pr-3">
          {`$${getTotalPrice()}/${yearly ? "yr" : "mo"}`}
        </span>
      </div>
    </div>
  );
};

export default FinishTemplate;
