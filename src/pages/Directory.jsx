import React from 'react';
import Layout from '../components/Layout/Layout';
import { useTalentsData } from '../hooks/useTalentData';
import { useLocation } from 'react-router-dom';
import { DataController } from '../components/DataController';
import { TemporaryProjectModal } from '../components/Projects/Modals';
import { AllTalents, DirectoryHeader } from '../components/HomePage';

function Directory() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const paramValue = params.get('q');
    const query = {
        select: 'photo,firstname,lastname,profession,activeSince,username',
        q: paramValue,
    };

    const { data, isLoading, error, refetch } = useTalentsData({ query });
    const talents = data?.data?.data?.talent;

    return (
        <Layout showTalentHidden isAuthRequired={false}>
            <DirectoryHeader />
            <DataController
                isLoading={isLoading}
                error={error}
                refetch={refetch}
                data={talents}
                Render={AllTalents}
                paginate
            />
            {/* modal */}
            <TemporaryProjectModal />
        </Layout>
    );
}

export default Directory;
