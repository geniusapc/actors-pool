import React from 'react';
import TalentDetailsAside from './Asides/TalentFullDetailsAside';
import TalentDetailsTab from './TalentDetailsTab/TalentDetailsTab';

const TalentDetails = ({ data: talent }) => {
    return (
        <div className="flex flex-col md:flex-row w-full gap-8">
            <div className="w-full md:w-[308px] ">
                <TalentDetailsAside talent={talent} />
            </div>
            <div className="w-full  shadow-3xl">
                <TalentDetailsTab talent={talent} />
            </div>
        </div>
    );
};

export default TalentDetails;
