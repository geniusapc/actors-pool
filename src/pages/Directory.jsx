import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { useTalentsData } from '../hooks/useTalentData';
import { useLocation } from 'react-router-dom';
import DataController from '../components/DataController/DataController';
import TalentCard from "../components/Talent/TalentCard"
import Button from '../components/Button/Button';
import TemporaryProjectCard from '../components/Projects/TemporaryProjectCard';
import { useDispatch } from 'react-redux';
import { openTempProjModal } from '../features/projects/projects';


function Directory() {
    const location = useLocation();
    const dispatch = useDispatch()
    const [talents, setTalents] = useState(null);



    const params = new URLSearchParams(location.search);
    const paramValue = params.get('q');
    const query = {
        select: 'photo,firstname,lastname,profession,activeSince,username',
        q: paramValue,
    };

    const { data, isLoading, error, refetch } = useTalentsData({ query });

    useEffect(() => {
        if (data?.data) setTalents(data?.data?.data?.talent);
    }, [data]);

    return (
        <Layout showTalentHidden isAuthRequired={false}>
            <div className="flex  justify-between mb-8">
                <h1 className="text-[#040503] text-3xl ">Talents Directory</h1>
                <div className='flex gap-2'>
                    <Button variant='primary' onClick={() => dispatch(openTempProjModal())} className='text-black'>View Project</Button>
                    <Button variant='outlined' className='text-black'>filter</Button>

                </div>
            </div>
            <DataController
                isLoading={isLoading}
                error={error}
                empty={!talents?.length}
                refetch={refetch}
                paginate
            >
                <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-3 gap-x-2">
                    {talents?.length && talents.map((talent) => <TalentCard key={talent?._id} talent={talent} />)}
                </div>
            </DataController>

            {/* modal */}

            <TemporaryProjectCard />
        </Layout>
    );
}

export default Directory;
