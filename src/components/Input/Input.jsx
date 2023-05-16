function Input({ id, label, placeholder = "", type = "text", className = "", variant = "primary", onChange = () => { }, value = "" }) {

  const defaultClass = " text-sm border border-gray-300 rounded-[43px] focus:ring-primary  focus:border-primary  block w-full px-6 py-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
  let inputClass = (variant === "primary") ?
    "bg-transparent  text-gray-900    "
    : (variant === "secondary") ?
      "bg-transparent  text-gray-100    "
      :
      "bg-transparent  text-gray-900    "

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label
        for={id}
        className="mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>}
      <input
        type={type}
        name={id}
        onChange={onChange}
        id={id}
        value={value}
        className={`${defaultClass}  ${inputClass}`}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
