import React from "react";
import Input from "../Input/Input";
import SelectInput from "../Input/Select";

const ProfileInformation = () => {
  return (
    <form>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
        <Input
          className="md:mb-10 mb-5"
          label="First Name"
          placeholder="Adebolanle"
        />
        <Input
          className="md:mb-10 mb-5"
          label="Last Name"
          placeholder="Adebolanle"
        />
        <Input
          className="md:mb-10 mb-5"
          label="Phone Number"
          placeholder="Adebolanle"
        />
        <SelectInput
          className="md:mb-10 mb-5"
          label="Country of Residence"
          placeholder="Adebolanle"
        />
        <SelectInput
          className="md:mb-10 mb-5"
          label="State of Residence"
          placeholder="Select state"
        />
        <SelectInput
          className="md:mb-10 mb-5"
          label="Gender"
          placeholder="Select one"
        />
        <Input
          className="md:mb-10 mb-5"
          label="Date of Birth"
          placeholder="Select date"
        />
        <Input
          className="md:mb-10 mb-5"
          type="date"
          label="Active Since?"
          placeholder="What year did you start acting?"
        />
      </div>
    </form>
  );
};

export default ProfileInformation;
