import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { useTalentsData } from '../hooks/useTalentData';
import { useLocation } from 'react-router-dom';
import Moment from 'react-moment';
import { SERVER_BASEURL } from '../config/keys';
import DataController from '../components/DataController/DataController';

const TalentCard = ({ talent }) => {
    return (
        <a className='h-[292px] w-full md:w-[292px]' href={`/talent/${talent._id}`}>
            <div className=" w-full h-full relative  bg-black mb-12 pb-8">
                <div className=" w-full h-full">
                    <img
                        className="object-contain w-full h-full"
                        src={`${SERVER_BASEURL}${talent.photo}`}
                        alt=""
                    />
                </div>
                <div className="absolute bottom-0 left-0 text-left text-[#ffffff] bg-black w-full">
                    <p><span className='mr-2'> {talent.firstname}</span> {talent.lastname}</p>
                    <p>
                        <span className="capitalize mr-2">{talent.profession}</span>
                        <span className="inline-block w-2 h-2 mr-2 ml-2 bg-white rounded-full"></span>
                        <span className='mr-2'>Active since</span>
                        <Moment format="YYYY">{talent.activeSince}</Moment>
                    </p>
                </div>
            </div>
        </a>
    );
};

function Directory() {
    const location = useLocation();
    const [talents, setTalents] = useState(null);
    const params = new URLSearchParams(location.search);
    const paramValue = params.get('q');
    const query = {
        select: 'photo,firstname,lastname,profession,activeSince',
        q: paramValue,
    };

    const { data, isLoading, error, refetch } = useTalentsData({ query });

    useEffect(() => {
        if (data?.data) setTalents(data?.data?.data?.talent);
    }, [data]);

    return (
        <Layout showTalentHidden isAuthRequired={false}>
            <div className="flex  justify-between">
                <h1 className="text-[#040503] text-3xl mb-8">Talents Directory</h1>
                {/* <Button variant='outlined' className='text-black'>filter</Button> */}
            </div>
            <DataController
                isLoading={isLoading}
                error={error}
                empty={!talents?.length}
                refetch={refetch}
                paginate
            >
                <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-3">
                    {talents?.length && talents.map((talent) => <TalentCard key={talent?._id} talent={talent} />)}
                </div>
            </DataController>
        </Layout>
    );
}

export default Directory;
