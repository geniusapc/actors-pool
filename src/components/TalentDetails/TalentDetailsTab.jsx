import React from 'react';
import TalentDetailsGallery from './TalentDetailsGallery';
import TalentDetailsMovies from './TalentDetailsMovies';
import TalentDetailsAbout from './TalentDetailsAbout';
import { useLocation } from 'react-router-dom';

const RenderProfileTab = ({ hash, talent }) => {
    switch (hash) {
        case '#gallery':
            return <TalentDetailsGallery talent={talent} />;
        case '#movies':
            return <TalentDetailsMovies talent={talent} />;
        default:
            return <TalentDetailsAbout talent={talent} />;
    }
};

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

function TalentDetailsTab({ talent }) {
    let location = useLocation();
    const hash = location.hash;

    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-6">
                <ul className="flex flex-wrap -mb-px space-x-2">
                    <Tab title="About" href={'#about'} isActive={hash === '#about' || hash === ''} />
                    <Tab title="Gallery" href={'#gallery'} isActive={hash === '#gallery'} />
                    <Tab title="Movies" href={'#movies'} isActive={hash === '#movies'} />
                </ul>
            </div>
            <RenderProfileTab talent={talent} hash={hash} />
        </>
    );
}

export default TalentDetailsTab;
