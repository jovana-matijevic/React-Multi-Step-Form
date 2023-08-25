import Card from "./Card";
import { Input } from "./Input";

const PerosnalInfoForm = ({ formId, onSubmit, initData }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  }
  return (
    <Card heading="Personal info" paragraph="Please provide your info..">
      <form
        className="mt-6 flex flex-col gap-2"
        id={formId}
        onSubmit={handleSubmit}
      >
        <Input
          label="Name"
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
          required
          defaultValue={initData.name}
        ></Input>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          required
          defaultValue={initData.email}
        ></Input>
        <Input
          label="Phone number"
          name="phone"
          placeholder="e.g. +12234534"
          required
          defaultValue={initData.phone}
        ></Input>
      </form>
    </Card>
  );
};

export default PerosnalInfoForm;
