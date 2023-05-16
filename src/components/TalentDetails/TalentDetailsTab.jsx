import React from 'react'

function TalentDetailsTab({ hash }) {
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-6">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <a href="#about" className={`inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${(hash === "#about" || hash === "") && 'text-blue-600 border-b-2  border-blue-600'}`} aria-current="page">About</a>
                </li>
                <li className="mr-2">
                    <a href="#gallery" className={`inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${hash === "#gallery" && 'text-blue-600 border-b-2  border-blue-600'}`} >Gallery</a>
                </li>
                <li className="mr-2">
                    <a href="#movies" className={`inline-block p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${hash === "#movies" && 'text-blue-600 border-b-2  border-blue-600'}`}>Movie</a>
                </li>
            </ul>
        </div>
    )
}

export default TalentDetailsTab