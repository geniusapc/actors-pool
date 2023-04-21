import React from "react";

const SelectInput = ({
  data = [],
  id,
  label,
  placeholder = "",
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        for={id}
        className="mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <select placeholder={placeholder} className="bg-gray-50 border px-6 py-4 border-gray-300 text-gray-900 text-sm rounded-[43px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
        {data.map((item) => (
          <option value={item.title}>{item.title}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
