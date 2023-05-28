import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputWithButton from '../Input/InputWithButton';
import AuthUser from './AuthUser';
import { openSignUpModal } from '../../features/auth/auth';
import { useDispatch } from 'react-redux';

function Header({ showTalentHidden = false }) {
    const isAuth = false;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [talentSearchValue, setTalentSearchValue] = useState();

    const onChangeSearchTalent = (e) => setTalentSearchValue(e.target.value);

    const onSubmitTalentHandler = (e) => {
        e.preventDefault();
        navigate(`/directory?q=${talentSearchValue}`);
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-white  border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                ></path>
                            </svg>
                        </button>
                        <a href="/" className="flex ml-2 md:ml-4 w-8">
                            <img src="/images/actors-pool-logo.svg" className="h-8 mr-3" alt="Actors Pool Logo" />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ml-3">
                            {!!showTalentHidden && (
                                <div className="hidden md:flex mr-14">
                                    <InputWithButton
                                        style={{ input: 'h-10' }}
                                        placeHolder="search for talent"
                                        value={talentSearchValue}
                                        hideBtn
                                        onSubmit={onSubmitTalentHandler}
                                        onChange={onChangeSearchTalent}
                                    />
                                </div>
                            )}
                            {isAuth ? (
                                <AuthUser />
                            ) : (
                                <button
                                    className="font-bold hover:bg-gray200"
                                    onClick={() => dispatch(openSignUpModal())}
                                >
                                    Create Account
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
