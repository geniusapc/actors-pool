import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useDispatch, useSelector } from "react-redux";
import ActionButtons from "./ActionButton";
import { nextStep, setFormData } from "../../features/profile/profile";
import { aboutSchema } from "../../validation/profile";
import { notifyError } from "../../utils/notification";


const ProfileDescription = () => {
  const dispatch = useDispatch()
  const step = useSelector((state) => state.createProfile.step)
  const stages = useSelector((state) => state.createProfile.stages)
  const preAbout = stages[step - 1].data?.about

  const [about, setAbout] = useState(preAbout);

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      await aboutSchema.validate(about)
      dispatch(setFormData({ step: step, data: { about } }));
      dispatch(nextStep())
    } catch (error) {
      notifyError(error?.message)
    }
  }

  return (
    <form className="bg-white" onSubmit={onSubmitHandler}>
      <div className="wmde-markdown-var"> </div>
      <MarkdownEditor
        className="border border-[#f4f4f4] bg-white shadow-[0px 2px 2px rgba(0, 0, 0, 0.1)] h-96"
        value={about}
        onChange={(value, _viewUpdate) => setAbout(value)}
      />
      <ActionButtons />
    </form>
  );
};

export default ProfileDescription;
