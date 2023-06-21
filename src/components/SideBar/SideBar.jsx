import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/auth';
import { ReactComponent as DirectoryIcon } from '../../assets/icons/directory.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as MessageIcon } from '../../assets/icons/message.svg';
import { ReactComponent as ClipboardIcon } from '../../assets/icons/clipboard.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg';


const sidebarList = [
    { id: 1, name: 'Directory', Icon: DirectoryIcon, href: '/talents', hightlightState: ['/talent'] },
    { id: 2, name: 'Profile', Icon: UserIcon, href: '/profile' },
    { id: 3, name: 'Messages', Icon: MessageIcon, href: '/messages' },
    { id: 4, name: 'Projects', Icon: ClipboardIcon, href: '/projects' },
    { id: 5, name: 'Settings', Icon: SettingsIcon, href: '/settings' },
];

const adminSidebarList = [
    { id: 1, name: 'Dashbord', Icon: MessageIcon, href: '/admin/dashboard' },
    { id: 2, name: 'Directory', Icon: DirectoryIcon, href: '/admin/talents' },
    { id: 3, name: 'Settings', Icon: SettingsIcon, href: '/admin/settings' },
];


function SideBar({ role = "User" }) {
    const location = useLocation();
    const list = role === "Admin" ? adminSidebarList : sidebarList


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    };


    const isActive = (href, hightlightState = []) => {
        const routes = [...hightlightState, href]
        return routes.some((route) => location?.pathname?.startsWith(route))
    };


    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 md:w-24 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col justify-between">
                <ul className="space-y-2 mt-14 font-medium">
                    {list.map(({ id, Icon, name, href }) => {
                        const activeStautsClass = (isActive(href)) ? 'text-primary bg-primary100  border-r-2 border-primary100 ' : ' text-gray400'
                        return (
                            <li key={id}>
                                <Link
                                    to={href}
                                    className={`flex flex-row  md:flex-col items-center  p-2 mb-4 text-xs text-gray-900  dark:text-white hover:bg-gray-100  dark:hover:bg-gray-700  ${activeStautsClass}`}
                                >
                                    <Icon />
                                    <span className="ml-3 md:ml-0">{name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <button
                    onClick={logoutHandler}
                    className="flex flex-row md:flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <LogoutIcon />
                </button>
            </div>
        </aside>
    )
}

export default SideBar;
