import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useDispatch } from "react-redux";
import ActionButtons from "./ActionButton";
import { nextStep } from "../../features/profile/profile";

const ProfileDescription = () => {
  const dispatch = useDispatch()
  const [markdown, setMarkdown] = useState("# This is a H1  \n## This is a H2  \n###### This is a H6");

  return (
    <form className="bg-white" onSubmit={() => dispatch(nextStep())}>
      <div className="wmde-markdown-var"> </div>
      <MarkdownEditor
        className="border border-[#f4f4f4] bg-white shadow-[0px 2px 2px rgba(0, 0, 0, 0.1)] h-96"
        value={markdown}
        onChange={(value, _viewUpdate) => setMarkdown(value)}
      />

      <ActionButtons />
    </form>
  );
};

export default ProfileDescription;
