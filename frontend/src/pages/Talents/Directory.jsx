import React from 'react';
import { useLocation } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { useTalentsData } from '../../hooks/useTalentData';
import { TemporaryProjectModal } from '../../components/Projects/Modals';
import { DirectoryHeader } from '../../components/Directory';
import DataStatus from '../../components/DataController/DataStatus';
import TalentCard from '../../components/Talent/TalentCards/TalentCard';
import { useState } from 'react';

function Directory() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const paramValue = params.get('q');
    const [filter, setFilter] = useState({});

    const query = {
        select: 'photo,gallery,firstname,lastname,profession,activeSince,username',
        q: paramValue,
        ...filter,
    };

    const { data, isLoading, isError } = useTalentsData({ query });
    const talents = data?.data?.data?.talent;

    return (
        <Layout showTalentHidden isAuthRequired={false}>
            <DirectoryHeader setFilter={setFilter} />
            <DataStatus empty={!talents?.length} isError={isError} isLoading={isLoading}>
                {talents?.length && (
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 xl:gap-x-8">
                        {talents.map((talent) => (
                            <TalentCard key={talent?._id} talent={talent} />
                        ))}
                    </div>
                )}
            </DataStatus>

            {/* modal */}
            <TemporaryProjectModal />
        </Layout>
    );
}

export default Directory;
