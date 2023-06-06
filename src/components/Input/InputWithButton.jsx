import React from 'react';

function InputWithButton({
    style = {},
    hideBtn = false,
    placeHolder = 'Search',
    onSubmit = () => { },
    onChange = () => { },
}) {
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
                    <img src="/icons/search.svg" className="w-5 h-5" alt="123" />
                </button>
                <input
                    type="search"
                    onChange={onChange}
                    id="search"
                    className={`block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${style.input}`}
                    placeholder={placeHolder}
                    required
                />
                {!hideBtn && (
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                )}
            </div>
        </form>
    );
}

export default InputWithButton;
