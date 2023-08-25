import Card from "./Card";
import FinishTemplate from "./FinishTemplate";

const FinishForm = ({ initData }) => {
  return (
    <Card
      heading="Finishing up"
      description="Double-check if everything looks okay before confirming."
    >
      <FinishTemplate
        planName={initData?.plan?.name}
        plan={initData?.plan}
        isYearly={Boolean(initData?.isYearly)}
        addons={Object.values(initData?.addons)}
      />
    </Card>
  );
};

export default FinishForm;
