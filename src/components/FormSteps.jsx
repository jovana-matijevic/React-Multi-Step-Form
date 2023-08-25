import StepItem from "./StepItem";

const stepArray = ["your info", "select plan", "add-ons", "summary"];
const FormSteps = ({ currentStep }) => {
    return (
        <div className="relative sm:w-[275px] sm:h-[568px] sm:min-w-[275px] sm:min-h-[568px]">
            <img
                className="absolute object-cover z-0 w-full sm:hidden"
                src="/bg-sidebar-mobile.svg"
                alt=""></img>

            <img
                className="absolute hidden z-0 sm:block"
                src="/bg-sidebar-desktop.svg"
                alt=""></img>
            <div className="relative py-8 flex justify-center gap-5 sm:flex-col sm:px-8 sm:gap-6">{
                stepArray.map((item, index) => {
                    return <StepItem key={item} text={item} step={index + 1} active={currentStep === index + 1}></StepItem>
                })
            }
            </div>
        </div>
    )
}

export default FormSteps