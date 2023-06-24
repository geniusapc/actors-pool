import React from 'react';
import { useTalentsData } from '../../../hooks/useTalentData';
import { useLocation } from 'react-router-dom';

import DataStatus from '../../../components/DataController/DataStatus';
import { DirectoryHeader } from '../../../components/Directory';
import DefaultTalentCard from '../../../components/Talent/TalentCards/DefaultTalentCard';

function Talents() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const paramValue = params.get('q');
    const query = {
        select: 'photo,gallery,firstname,lastname,profession,activeSince,username',
        q: paramValue,
    };

    const { data, isLoading, isError } = useTalentsData({ query });
    const talents = data?.data?.data?.talent;

    return (
        <>
            <DirectoryHeader hideProjectButton />
            <DataStatus empty={!talents?.length} isError={isError} isLoading={isLoading}>
                {talents?.length && (
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {talents.map((talent) => (
                            <DefaultTalentCard key={talent?._id} talent={talent} />
                        ))}
                    </div>
                )}
            </DataStatus>
        </>
    );
}

export default Talents;
