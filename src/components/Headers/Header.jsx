import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import InputWithButton from '../Input/InputWithButton';
import { ReactComponent as HamBugerIcon } from "../../assets/icons/hamburger.svg"
import { ReactComponent as Logo } from "../../assets/icons/logo.svg"
import AuthUser from './AuthUser';
import { openSignUpModal } from '../../features/auth/auth';
import { useDispatch, useSelector } from 'react-redux';

function Header({ showTalentHidden = false }) {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const paramValue = params.get('q');

    const [talentSearchValue, setTalentSearchValue] = useState(paramValue);

    const onChangeSearchTalent = (e) => setTalentSearchValue(e.target.value);

    const onSubmitTalentHandler = (e) => {
        e.preventDefault();
        if (talentSearchValue)
            navigate(`/directory?q=${talentSearchValue}`);
        else navigate(`/directory`);
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
                            <HamBugerIcon />
                        </button>
                        <Link to="/" className="flex ml-2 md:ml-4 w-8">
                            <Logo />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ml-3">
                            {!!showTalentHidden && (
                                <div className="hidden md:flex mr-14">
                                    <InputWithButton
                                        style={{ input: 'h-10' }}
                                        placeHolder="search for talent"
                                        value={talentSearchValue || ""}
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
