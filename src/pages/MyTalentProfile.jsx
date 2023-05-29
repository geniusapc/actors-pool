import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import DataController from '../components/DataController/DataController';
import { useMyTalentProfile } from '../hooks/useTalentData';
import { useLocation, useNavigate } from 'react-router-dom';
import TalentDetailsTab from '../components/TalentDetails/TalentDetailsTab';
import TalentDetailsAbout from '../components/TalentDetails/TalentDetailsAbout';
import TalentDetailsGallery from '../components/TalentDetails/TalentDetailsGallery';
import TalentDetailsMovies from '../components/TalentDetails/TalentDetailsMovies';
import MyTalentDetailsAside from '../components/TalentDetails/MyTalentDetailsAside';
import ShareProfileCard from '../components/TalentDetails/ShareProfile';
import Button from '../components/Button/Button';

function MyTalentProfile() {
    let location = useLocation();
    const navigate = useNavigate();
    const [talent, setTalent] = useState();
    const { data, isLoading } = useMyTalentProfile();

    useEffect(() => {
        if (data?.data?.data) {
            const userHasProfile = !!data?.data?.data;
            if (!userHasProfile) navigate('/profile/create');
            setTalent(data?.data?.data);
        }
        console.log(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <Layout>
            <DataController isLoading={isLoading} empty={!talent}>
                {talent && (
                    <div className="container mx-auto">
                        <div className="hidden w-full items-center md:flex justify-end gap-8 mb-3">
                            <div>
                                <input type="checkbox" name="" id="" checked /> Make Profile Visible
                            </div>
                            <Button variant="outlined">Hide Specific Details</Button>
                            <Button variant="primary">Edit Profile</Button>
                        </div>

                        <div className=" flex flex-col md:flex-row w-full gap-8">
                            <div className="w-[308px]">
                                <MyTalentDetailsAside talent={talent} />
                                <ShareProfileCard className="h-[118px]" />
                            </div>
                            <div className="w-full  md:w-3/4 shadow-3xl">
                                <TalentDetailsTab hash={location.hash} />
                                {(location.hash === '#about' || location.hash === '') && (
                                    <TalentDetailsAbout talent={talent} />
                                )}
                                {location.hash === '#gallery' && <TalentDetailsGallery talent={talent} />}
                                {location.hash === '#movies' && <TalentDetailsMovies talent={talent} />}
                            </div>
                        </div>
                    </div>
                )}
            </DataController>
        </Layout>
    );
}

export default MyTalentProfile;
