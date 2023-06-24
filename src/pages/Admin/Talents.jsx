import React from 'react';
import { useTalentsData } from '../../hooks/useTalentData';
import { useLocation } from 'react-router-dom';
import { DataController } from '../../components/DataController';
import { AllTalents, DirectoryHeader } from '../../components/HomePage';

function Talents() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const paramValue = params.get('q');
    const query = {
        select: 'photo,gallery,firstname,lastname,profession,activeSince,username',
        q: paramValue,
    };

    const { data, isLoading, error, refetch } = useTalentsData({ query });
    const talents = data?.data?.data?.talent;

    return (
        <>
            <DirectoryHeader />
            <DataController
                isLoading={isLoading}
                error={error}
                empty={!talents?.length}
                refetch={refetch}
                data={talents}
                Render={AllTalents}
                paginate
            />
        </>
    );
}

export default Talents;
