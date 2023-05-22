import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { useTalentsData } from '../hooks/useTalentData';
import { useLocation } from 'react-router-dom';
import Moment from 'react-moment';
import { SERVER_BASEURL } from '../config/keys';
import DataController from '../components/DataController/DataController';

function Directory() {
    const location = useLocation();
    const [talent, setTalent] = useState(null);
    const params = new URLSearchParams(location.search);
    const paramValue = params.get('q');
    const query = {
        select: 'photo,firstname,lastname,profession,activeSince',
        q: paramValue,
    };

    const { data, isLoading, error, refetch } = useTalentsData({ query });

    useEffect(() => {
        if (data?.data) setTalent(data?.data);
    }, [data]);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <Layout showTalentHidden>
            <div className="flex  justify-between">
                <h1 className="text-[#040503] text-3xl mb-8">Talents Directory</h1>
                {/* <Button variant='outlined' className='text-black'>filter</Button> */}
            </div>
            <DataController isLoading={isLoading} error={error} empty={!talent?.length} paginate>
                <div className="grid grid-cols-4 gap-4 mb-4">
                    {talent?.length &&
                        talent.map((user) => (
                            <a key={user?._id} href={`/talent/${user._id}`}>
                                <div className="h-[292px] w-[292px]  relative  bg-black mb-12 pb-8">
                                    <div className=" w-[292px] h-[292px]">
                                        <img
                                            className="object-contain w-full h-full"
                                            src={`${SERVER_BASEURL}${user.photo}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 text-left text-[#ffffff] bg-black w-full">
                                        <p>
                                            {user.firstname}
                                            {user.lastname}
                                        </p>
                                        <span className="capitalize">{user.profession}</span> . Active since{' '}
                                        <Moment format="YYYY">{user.activeSince}</Moment>
                                    </div>
                                </div>
                            </a>
                        ))}
                </div>
            </DataController>
        </Layout>
    );
}

export default Directory;
