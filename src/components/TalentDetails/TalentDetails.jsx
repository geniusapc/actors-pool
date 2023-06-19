import React from 'react';
import TalentDetailsAside from './TalentDetailsAside';
import TalentDetailsTab from './TalentDetailsTab';

const TalentDetails = ({ data: talent }) => {
    return (
        <div className="flex flex-col md:flex-row w-full gap-8">
            <div className="w-full md:w-[308px] ">
                <TalentDetailsAside talent={talent} />
            </div>
            <div className="w-full md:w-3/4 shadow-3xl">
                <TalentDetailsTab talent={talent} />
            </div>
        </div>
    );
};

export default TalentDetails;
