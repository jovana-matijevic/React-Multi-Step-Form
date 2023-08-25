//import { addonsUrl } from "../constants/api";
import { addonsUrl } from "../constants/api";
import useFetch from "../constants/useFetch";
import AddonsCheckbox from "./AddonsCheckbox";
import Card from "./Card";

const AddonsForm = ({ formId, onSubmit, isYearly, initData }) => {
  const { data: addons, setLoading, isError } = useFetch("addons", addonsUrl);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedAddons = {};
    formData.forEach((item) => {
      const parsedData = JSON.parse(item);
      selectedAddons[parsedData.id] = {
        id: parsedData.id,
        name: parsedData.name,
        monthly: parsedData.monthly,
        yearly: parsedData.yearly,
      };
    });
    onSubmit(selectedAddons);
  }

  return (
    <Card
      heading="Pick add-ons"
      paragraph="Add-ons help enhance your gaming expirience."
    >
      <form id={formId} onSubmit={handleSubmit}>
        {setLoading && <div>Loading data...</div>}
        {!setLoading &&
          addons?.map((addon, i) => {
            return (
              <AddonsCheckbox
                key={addon.id}
                name={addon.name.toLowerCase().replaceAll(" ", "-")}
                value={addon}
                title={addon.name}
                description={addon.description}
                prices={`${
                  isYearly ? `$${addon.yearly}/yr` : `$${addon.monthly}/mo`
                }`}
                defaultChecked={Boolean(initData?.[addon.id])}
              ></AddonsCheckbox>
            );
          })}
      </form>
    </Card>
  );
};

export default AddonsForm;
