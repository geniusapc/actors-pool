function Input({ id, label, placeholder = "" , type ="text", className=""}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        for={id}
        className="mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[43px] focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
