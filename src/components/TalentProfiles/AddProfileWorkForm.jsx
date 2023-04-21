import Button from "../Button/Button";
import Input from "../Input/Input";

const AddProfileWorkForm = () => {
  return (
    <div>
      <form class="space-y-6" action="#">
        <Input id="email" label="Movie Title" placeholder="Enter Movie title" />
        <Input
          id="password"
          label="Year of Production (Optional)"
          placeholder="Enter Year"
        />
        <div className="flex flex-col gap-4 py-4 items-center">
          <Button className="mx-auto" type="submit" variant="primary">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};


export default AddProfileWorkForm;