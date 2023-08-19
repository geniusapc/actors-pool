import React, { useState } from 'react';
import ActionButtons from './ActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, setFormData } from '../../../features/profile/profile';
import Input from '../../Input/Input';
import { socialLinksSchema } from '../../../validation/profile';
import { notifyError } from '../../../utils/notification';



const SocialAccountV2 = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.createProfile.step);
  const stages = useSelector((state) => state.createProfile.stages);
  const prevData = stages[step - 1].data?.socialMedia || {};
  const [data, setData] = useState(prevData);

  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value || undefined }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const socialLinks = Object.values(data).filter(Boolean)

    if (socialLinks?.length < 2) return notifyError("Please add at least two social accounts");

    try {
      await socialLinksSchema.validate(data);
      dispatch(setFormData({ step: step, data: { socialMedia: data } }));
      dispatch(nextStep());
    } catch (error) {
      notifyError(error?.message);
    }
  };

  return (
    <div>
      <div className="border-border100 border" />
      <span className="mt-5 mb-8 block text-center text-gray text-sm">
        Connect at least two of these accounts to verify your identity
      </span>
      <form onSubmit={onSubmitHandler}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-10">
          <Input
            id="instagram"
            name="instagram"
            value={data?.instagram}
            onChange={onChangehandler}
            label="Instagram"
            placeholder="https://www.instagram.com/username"
          />
          <Input
            id="twitter"
            name="twitter"
            value={data?.twitter}
            onChange={onChangehandler}
            label="Twitter"
            placeholder="https://twitter.com/username"
          />
          <Input
            id="facebook"
            name="facebook"
            value={data?.facebook}
            onChange={onChangehandler}
            label="Facebook"
            placeholder="https://web.facebook.com/username"
          />
          <Input
            id="tiktok"
            name="tiktok"
            value={data?.tiktok}
            onChange={onChangehandler}
            label="TikTok"
            placeholder="https://www.tiktok.com/username"
          />
          <Input
            id="snapchat"
            name="snapchat"
            value={data?.snapchat}
            onChange={onChangehandler}
            label="Snapchat"
            placeholder="https://www.snapchat.com/username"
          />

        </div>
        <ActionButtons />

      </form>


    </div>
  );
};

export default SocialAccountV2;
