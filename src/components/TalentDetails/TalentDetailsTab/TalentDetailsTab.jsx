import React from 'react';
import { useLocation } from 'react-router-dom';
import Tab from './Tab';
import RenderProfileTab from './RenderProfileTab';


function TalentDetailsTab({ talent }) {
    let location = useLocation();
    const hash = location.hash;

    return (
        <div className='px-4'>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-6">
                <ul className="flex flex-wrap -mb-px space-x-2">
                    <Tab title="About" href={'#about'} isActive={hash === '#about' || hash === ''} />
                    <Tab title="Gallery" href={'#gallery'} isActive={hash === '#gallery'} />
                    <Tab title="Movies" href={'#movies'} isActive={hash === '#movies'} />
                </ul>
            </div>
            <RenderProfileTab talent={talent} hash={hash} />
        </div>
    );
}

export default TalentDetailsTab;
