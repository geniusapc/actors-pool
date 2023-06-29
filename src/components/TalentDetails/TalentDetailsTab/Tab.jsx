import React from 'react';

const Tab = ({ isActive = false, title, href }) => {
    const activeClass = 'text-blue-600 border-b-2  border-blue-600';
    const defaultClass =
        'inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300';
    return (
        <li>
            <a href={href} className={`${defaultClass}  ${isActive && activeClass}`} aria-current="page">
                {title}
            </a>
        </li>
    );
};

export default Tab;
