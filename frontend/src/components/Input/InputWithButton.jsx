import React from 'react';
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"

function InputWithButton({
    style = {},
    hideBtn = false,
    value = "",
    placeHolder = 'Search',
    buttonText = "Search",
    onSubmit = () => { },
    onChange = () => { },
a}) {
    return (
        <form className={`w-full ${style.form}`} onSubmit={onSubmit}>
            <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative w-full">
                <button className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon />
                </button>
                <input
                    type="search"
                    onChange={onChange}
                    value={value}
                    id="search"
                    className={`block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${style.input}`}
                    placeholder={placeHolder}
                />
                {!hideBtn && (
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-20 md:w-40 "
                    >
                        {buttonText}
                    </button>
                )}
            </div>
        </form>
    );
}

export default InputWithButton;
