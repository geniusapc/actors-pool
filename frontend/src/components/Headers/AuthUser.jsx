import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as DropDownIcon } from '../../assets/icons/drop-down-arrow.svg';
import { useClickOutside, useEscapeKey } from '../../hooks/useEvents';

function AuthUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const user = useSelector((state) => state.auth.currentLoggedInUser);

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    };

    const wrapperRef = useRef(null);
    const closeDropDown = () => {
        setIsDropdownOpen(false)
    }
    useEscapeKey(closeDropDown)
    useClickOutside(wrapperRef, closeDropDown);

    return (
        <div>
            <div className="relative">
                <button
                    type="button"
                    className="flex text-sm bg-inherit items-center gap-2 rounded-lg px-2 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    onClick={() => setIsDropdownOpen((e) => !e)}
                >
                    <span className="sr-only">Open user menu</span>
                    {user?.photo ? <img className="w-8 h-8 " src={user?.photo} alt="user" /> : <UserIcon className='text-gray300' />}
                    <p className='capitalize'>{user?.firstname}</p>
                    <DropDownIcon />
                </button>
            </div>
            {isDropdownOpen && (
                <div className="z-50  absolute right-2  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" ref={wrapperRef}>
                    <div className="px-4 py-3" role="none">
                        <p className="text-sm text-gray-900 dark:text-white capitalize" role="none">
                            {user?.firstname} {user?.lastname}
                        </p>
                        <p
                            className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                            role="none"
                        >
                            {user?.email}
                        </p>
                    </div>
                    <ul className="py-1" role="none">
                        <li>
                            <button
                                className="w-full items-start text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                                onClick={() => navigate('/talents')}
                            >
                                Dashboard
                            </button>
                        </li>
                        <li>
                            <button
                                className="w-full items-start text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                                onClick={() => navigate('/settings')}
                            >
                                Settings
                            </button>
                        </li>
                        <li>
                            <button
                                className="w-full items-start text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                                onClick={logoutHandler}
                            >
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AuthUser;
