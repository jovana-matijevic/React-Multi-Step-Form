import Button from "./components/Button";
import FormSteps from "./components/FormSteps";
import PerosnalInfoForm from "./components/PerosnalInfoForm";
import { useState } from "react";
import PlanForm from "./components/PlanForm";
import AddonsForm from "./components/AddonsForm";
import FinishForm from "./components/FinishForm";
import Heading from "./components/Heading";

function App() {
  const [currentStep, setcurrentStep] = useState(1);
  const [allData, setallData] = useState({});
  const [isFinished, setisFinished] = useState(false);

  const handleSubmitPersonalInfo = (data) => {
    // setallData({ ...data });
    // setcurrentStep((step) => {
    //   return step + 1;
    // });
    setallData((state) => ({ ...state, ...data }));
    setcurrentStep((step) => step + 1);
  };

  const handleSumbitPlan = (data) => {
    setallData((state) => ({
      ...state,
      plan: data.plan,
      isYearly: data.isYearly,
    }));

    setcurrentStep((step) => {
      return step + 1;
    });
  };

  const handleSumbitAddons = (data) => {
    setallData((state) => ({ ...state, addons: data }));
    setcurrentStep((step) => step + 1);
  };

  return (
    <div className="lg:flex lg:justify-center lg:mt-8">
      <div className="flex flex-col w-full mb-28 max-w-5xl sm:p-4 rounded-lg sm:bg-white sm:flex-row ">
        <FormSteps currentStep={currentStep}></FormSteps>
        <div className="sm:mx-auto sm:my-2 sm:flex sm:flex-col w-full sm:justify-between">
          {currentStep === 1 && (
            <PerosnalInfoForm
              formId={currentStep}
              onSubmit={handleSubmitPersonalInfo}
              initData={allData}
            ></PerosnalInfoForm>
          )}
          {currentStep === 2 && (
            <PlanForm
              formId={currentStep}
              onSubmit={handleSumbitPlan}
              initData={allData}
            ></PlanForm>
          )}

          {currentStep === 3 && (
            <AddonsForm
              formId={currentStep}
              isYearly={allData.isYearly}
              onSubmit={handleSumbitAddons}
              initData={allData}
            ></AddonsForm>
          )}

          {currentStep === 4 && !isFinished && (
            <FinishForm initData={allData}></FinishForm>
          )}

          {isFinished && (
            <div className="flex flex-col justify-center items-center my-auto">
              <img src="/icon-thank-you.svg"></img>
              <Heading
                className="text-center p-4"
                heading="Thank you!"
                paragraph="Thanks for confirming your subscription. We hope you have fun using our platform. If you need support, please feel free to email us at support@gmail.com."
              ></Heading>
            </div>
          )}

          {!isFinished && (
            <div className="w-full fixed bottom-0 p-5 flex bg-white z-10 sm:relative md:mx-auto md:max-w-lg">
              {currentStep > 1 && (
                <Button
                  ghost
                  onClick={() => setcurrentStep((step) => step - 1)}
                >
                  Go Back
                </Button>
              )}

              <Button
                form={currentStep}
                onClick={() => {
                  if (currentStep === 4) {
                    setisFinished(true);
                  }
                }}
                className="ml-auto"
              >
                {currentStep === 4 ? "Confirm" : "Next step"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
