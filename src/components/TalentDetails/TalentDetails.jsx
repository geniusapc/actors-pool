import React from 'react'
import { useLocation } from 'react-router-dom';
import TalentDetailsAside from './TalentDetailsAside';
import TalentDetailsTab from './TalentDetailsTab';
import TalentDetailsAbout from './TalentDetailsAbout';
import TalentDetailsGallery from './TalentDetailsGallery';
import TalentDetailsMovies from './TalentDetailsMovies';

const TalentDetails = ({ data: talent }) => {
    let location = useLocation();
    let CurrentTab;
    if (location.hash === "#gallery") CurrentTab = TalentDetailsGallery
    else if (location.hash === "#movies") CurrentTab = TalentDetailsMovies
    else CurrentTab = TalentDetailsAbout

    return (
        <div className="flex flex-col md:flex-row w-full gap-8">
            <div className="w-full md:w-[308px] ">
                <TalentDetailsAside talent={talent} />
            </div>
            <div className="w-full md:w-3/4 shadow-3xl">
                <TalentDetailsTab hash={location.hash} />
                <CurrentTab talent={talent} />
            </div>
        </div>
    );
}

export default TalentDetails