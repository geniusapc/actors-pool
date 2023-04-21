import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";

const ProfileDescription = () => {
  const [markdown, setMarkdown] = useState("# This is a H1  \n## This is a H2  \n###### This is a H6");

  return (
    <div className="bg-white">
      <div className="wmde-markdown-var"> </div>
      <MarkdownEditor
        className="border border-[#f4f4f4] bg-white shadow-[0px 2px 2px rgba(0, 0, 0, 0.1)] h-96"
        value={markdown}
        onChange={(value, _viewUpdate) => setMarkdown(value)}
      />
    </div>
  );
};

export default ProfileDescription;
