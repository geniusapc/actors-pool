import React from 'react'
import InputWithButton from '../Input/InputWithButton'


function AuthHeader({ showTalentHidden = false }) {
    const user = {
        photo: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
        firstName: "Prince",
        lastName: "Arthur",
        email: "princearthur.com"
    }

    return (
        <nav className="fixed top-0 z-50 w-full bg-white  border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <a href="/" className="flex ml-2 md:ml-4 w-8">
                            <img src="/images/actors-pool-logo.svg" class="h-8 mr-3" alt="Actors Pool Logo" />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ml-3">
                            {
                                !!showTalentHidden && <div className='hidden md:flex mr-14'>
                                    <InputWithButton style={{ input: "h-10" }} placeHolder="search for talent" hideBtn />
                                </div>
                            }
                            <div>
                                <button type="button" className="flex text-sm bg-inherit items-center gap-2 rounded-lg px-2 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 " src={user.photo} alt="user" />
                                    <p>{user.firstName}</p>
                                    <img src="images/drop-down-arrow.svg" alt="" />
                                </button>
                            </div>
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                                        {user.firstName} {user.lastName}
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                        {user.email}
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a href="#1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default AuthHeader