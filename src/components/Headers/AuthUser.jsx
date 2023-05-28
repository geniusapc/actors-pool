import React from 'react'

function AuthUser() {
    const user = {
        photo: '',
        firstName: 'Prince',
        lastName: 'Arthur',
        email: 'princearthur.com',
    };
    return (
        <div>
            <div>
                <button
                    type="button"
                    className="flex text-sm bg-inherit items-center gap-2 rounded-lg px-2 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                >
                    <span className="sr-only">Open user menu</span>

                    {user.photo ? (
                        <img className="w-8 h-8 " src={user.photo} alt="user" />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                        </svg>
                    )}

                    <p>{user.firstName}</p>
                    <img src="images/drop-down-arrow.svg" alt="" />
                </button>
            </div>
            <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
            >
                <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                        {user.firstName} {user.lastName}
                    </p>
                    <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                    >
                        {user.email}
                    </p>
                </div>
                <ul className="py-1" role="none">
                    <li>
                        <a
                            href="#1"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#1"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Settings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#1"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AuthUser