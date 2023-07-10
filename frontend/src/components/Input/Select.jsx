import React from 'react';

const SelectInput = ({ data = [], id, label, placeholder = '', className = '', size = "lg", onChange, name, defaultOptionLabel, value = "" }) => {
  const sizeClass = size === "md" ? "h-[46px] py-2.5 px-4" : "h-[56px] border px-6 py-4"
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <select
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        className={`bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-[43px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white  ${sizeClass}`}
      >
        {defaultOptionLabel && <option value="" disabled>{defaultOptionLabel}</option>}
        {data.map((item) => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
