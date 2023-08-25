import { useState } from "react";

import { billingPlan } from "../constants/api";
import Card from "./Card";
import SelectableCard from "../SelectableCard";
import SwitchButton from "./SwitchButton";
import "./SwitchButton.css";
import {
  createPricesString,
  formatPlanPrice,
} from "../util/createPricesString";
import useFetch from "../constants/useFetch";

const PlanForm = ({ formId, onSubmit, initData }) => {
  // const [billingPlans, setbillingPlans] = useState([]);
  // const [setLoading, setIsLoading] = useState(true);
  // const [isError, setisError] = useState(null);
  const {
    data: billingPlans,
    setLoading,
    isError,
  } = useFetch("billing-plan", billingPlan);
  const [isYearly, setisYearly] = useState(Boolean(initData?.isYearly));
  // useEffect(() => {
  //   async function getBillingPlans() {
  //     try {
  //       const response = await fetch(billingPlan);
  //       const data = await response.json();

  //       setbillingPlans(data);
  //     } catch (error) {
  //       setisError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getBillingPlans();
  // }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    onSubmit({ plan: JSON.parse(data.plan), isYearly });
  }

  const logState = (state) => {
    setisYearly(state);
  };
  //const [checked, setchecked] = useState(false);

  return (
    <Card
      heading={"Select your plan"}
      paragraph={"You have the option of monthly or yearly billing."}
    >
      <form id={formId} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 md:flex-row mb-8">
          {setLoading && <div>Loading...</div>}
          {!setLoading &&
            billingPlans?.map((plan, i) => (
              <SelectableCard
                defaultCheck={
                  initData?.plan?.id ? initData.plan.id === plan.id : i === 0
                }
                key={plan.id}
                name="plan"
                value={plan}
                title={plan.name}
                // subtitle={`$${plan.monthly}/mo`}
                subtitle={formatPlanPrice(plan, isYearly)}
                description={
                  isYearly ? ` ${plan.yearlyFreePeriod} months free` : undefined
                }
                imgSrc={`/icon-${plan.name}.svg`}
              />
            ))}
          {/* {isError && <p>Something has gone wrong.</p>} */}
        </div>

        <div className="rounded-md flex gap-6 items-center justify-center p-4 bg-light-gray">
          <span className="leading-none font-medium text-marine-blue">
            Monthly
          </span>
          <SwitchButton value={isYearly} onChange={logState} />
          <span className="leading-none font-medium text-marine-blue">
            Yearly
          </span>
        </div>
      </form>
    </Card>
  );
};

export default PlanForm;
