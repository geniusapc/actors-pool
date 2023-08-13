import React from 'react';
import Input from '../../Input/Input';
import SelectInput from '../../Input/Select';
import { useState } from 'react';
import { coutries } from '../../../data/countries';
import { NGA } from '../../../data/states';
import ActionButtons from './ActionButton';
import { nextStep, setFormData } from '../../../features/profile/profile';
import { useDispatch, useSelector } from 'react-redux';
import { personalInfoSchema } from '../../../validation/profile';
import { notifyError } from '../../../utils/notification';
import moment from 'moment';
import { LANGUAGES } from '../../../data/languages';
import Select from 'react-select';

const ProfileInformation = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.createProfile.step);
  const stages = useSelector((state) => state.createProfile.stages);
  const prevData = stages[step - 1].data;
  const [data, setData] = useState(prevData);
  const currentYearMonthDay = moment().format('YYYY-MM-DD');
  const currentMonthYear = moment().format('YYYY-MM');
  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeLanguage = (e) => {

    setData((prev) => ({ ...prev, languages: e?.map((res) => res.value) }));

  };

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await personalInfoSchema.validate(data);
      dispatch(setFormData({ step: step, data: data }));
      dispatch(nextStep());
    } catch (error) {
      notifyError(error?.message);
    }
  };
  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-10">
        <Input
          id="firstname"
          name="firstname"
          value={data?.firstname}
          onChange={onChangehandler}
          label="First Name"
          placeholder="Adebolanle"
        />
        <Input
          id="lastname"
          name="lastname"
          value={data?.lastname}
          onChange={onChangehandler}
          label="Last Name"
          placeholder="Adebolanle"
        />
        <Input
          id="phoneNumber"
          name="phoneNumber"
          value={data?.phoneNumber}
          onChange={onChangehandler}
          label="Phone Number"
          placeholder="+234 0000000000"
        />
        <SelectInput
          id="country"
          name="country"
          value={data?.country}
          onChange={onChangehandler}
          data={coutries}
          label="Country of Residence"
          defaultOptionLabel="Please select your country of residence"
          placeholder="What country do you live?"
        />
        <SelectInput
          id="state"
          name="state"
          value={data?.state}
          onChange={onChangehandler}
          data={NGA}
          label="State of Residence"
          defaultOptionLabel="Please select your state of residence"
          placeholder="Select state"
        />
        <SelectInput
          id="gender"
          name="gender"
          value={data?.gender}
          onChange={onChangehandler}
          data={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
          label="Gender"
          defaultOptionLabel="Please select your gender"
          placeholder="Select one"
        />
        <Input
          id="dob"
          name="dob"
          type="date"
          max={currentYearMonthDay}
          value={data?.dob}
          onChange={onChangehandler}
          label="Date of Birth"
          placeholder="Select date"
        />
        <Input
          id="activeSince"
          name="activeSince"
          type="month"
          max={currentMonthYear}
          value={data?.activeSince}
          onChange={onChangehandler}
          label="Active Since?"
          placeholder="What year did you start acting?"
        />


        <div>
          <label htmlFor="">Language</label>

          <Select
            id="languages"
            name="languages"
            styles={{
              control: (styles) => ({
                ...styles,
                borderRadius: '43px',
                height: '56px',
                paddingLeft: '12px',
              }),
            }}

            isMulti
            cacheOptions
            options={LANGUAGES}
            onChange={onChangeLanguage}
          />
        </div>
      </div>
      <ActionButtons />
    </form>
  );
};

export default ProfileInformation;
