
function Input({
  id,
  label,
  placeholder = '',
  type = 'text',
  className = '',
  variant = 'primary',
  onChange = () => { },
  value = '',
  size = "lg",
  LeftComponent,
  ...rest
}) {
  const sizeClass = size === "md" ? " h-[46px] py-2.5 px-4" : " h-[56px] px-6 py-2 "
  const defaultClass =
    ' text-sm border border-gray-300 rounded-[43px] focus:ring-primary  focus:border-primary  block w-full  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white';
  let inputClass =
    variant === 'primary'
      ? 'bg-transparent  text-gray-900 '
      : variant === 'secondary'
        ? 'bg-transparent  text-gray-100 '
        : 'bg-transparent  text-gray-900 ';

  return (
    <div className={`flex flex-col ${className} `}>
      {label && (
        <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-900 ">
          {label}
        </label>
      )}
      <div className="w-full relative">

        <input
          type={type}
          name={id}
          onChange={onChange}
          id={id}
          value={value}
          className={`  ${defaultClass}  ${inputClass} ${sizeClass}`}
          placeholder={placeholder}


          {...rest}
        />


        {LeftComponent &&
          <span className="w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3 pt-1 z-50" >
            <LeftComponent />
          </span>
        }

      </div>
    </div>
  );
}

export default Input;
